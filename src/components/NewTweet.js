import React from 'react'

export default function NewTweet() {
  return (
    <div>
            
            <div className='card'>
            <p><b> Compose new Tweet</b></p>
            <div className='container'>
                <form>
                <textarea name="message" rows="10" cols="30">
                The cat was playing in the garden.
                </textarea>
                <br/>
                <button>Submit</button>
                </form>
            </div>
            
            </div>
    </div>
  )
}
