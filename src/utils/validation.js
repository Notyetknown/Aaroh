import {categories} from '../data/pillars'
export function validate(v,captcha){const e={}
 const n=v.name.trim(),m=v.message.trim()
 if(!n)e.name='Enter your name.';else if(n.length>80)e.name='Name must be 80 characters or fewer.'
 if(!v.email.trim())e.email='Enter your email address.';else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))e.email='Enter a valid email, like name@example.com.'
 if(!categories.includes(v.category))e.category='Choose one of the categories.'
 if(m.length<10)e.message='Describe your request in at least 10 characters.';else if(m.length>500)e.message='Message must be 500 characters or fewer.'
 if(String(captcha.answer).trim()!==String(captcha.expected))e.captcha='That answer is not correct. Try again or get a new question.'
 return e}
