// Sends each request to the Aaroh inbox via Web3Forms (no backend needed).
const KEY=import.meta.env.VITE_WEB3FORMS_KEY
export async function sendRequestEmail({name,email,category,message}){
 if(!KEY||KEY==='your_web3forms_access_key')throw new Error('Email is not configured. Set VITE_WEB3FORMS_KEY in your .env file.')
 const res=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
  body:JSON.stringify({access_key:KEY,subject:`Aaroh request: ${category}`,from_name:'Aaroh Website',name,email,category,message,replyto:email})})
 let data;try{data=await res.json()}catch{throw new Error('Email service returned an unreadable response.')}
 if(!res.ok||!data.success)throw new Error(data.message||'Email could not be sent.')
 return data}
