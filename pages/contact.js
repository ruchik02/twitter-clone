import React from 'react'

const Contact = () => {
  return (
    <>
    <div class="absolute ">
        <input type="checkbox" id="click"/>
        <label for="click" class="click-me">Click Me</label>
        <div class="content">
            <div class="header">
                <h2>Modal Popup</h2>
                <label for="click" class="fas fa-times"></label>
            </div>
            <label for="click" class="fas fa-check"></label>
            <p>
                This is a Pure HTML and CSS Modal ♠
            </p>
            <div class="line"></div>
            <label for="click" class="close-btn">Close</label>
        </div>
    </div>
    </>
  )
}

export default Contact