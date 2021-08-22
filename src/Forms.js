import { useState } from 'react'


export default function Forms() {

    //useState hook
    const [showLevel2, setShowLevel2] = useState("")
    const [showLevel3, setShowLevel3] = useState("")


    return (
        <form>
            <div id='level1'>
                <label >Level 1 Dropdown </label>
                <select
                    onChange={e => { setShowLevel2(e.target.value) }}
                    value={showLevel2}
                >
                    <option value='' disabled>Select Something</option>
                    <option value="show">Show More Dropdowns</option>
                    <option value="dontshow" >Don't show more</option>
                </select>
            </div>


            <div id='level2'>
                {
                    showLevel2 === 'show' ?
                        <>
                            <label>Level 2 Dropdown </label>
                            <select
                                value={showLevel3}
                                onChange={(e) => { setShowLevel3(e.target.value) }}
                            >
                                <option value='' disabled>Select Something</option>
                                <option value="showLevel3">Show More stuff</option>
                                <option value="dontshowLevel3" >Don't show more stuff</option>
                            </select>
                        </>
                        : null
                }
            </div>

            <div id='level3'>
                {
                    showLevel3 === 'showLevel3'
                        ? <h3>You've reached the end</h3>
                        : null
                }
            </div>
        </form >
    )
}