const plainText="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const pt=plainText.split("")
const keyword="BINIYAMAM"
const encrypting =keyword.split("")

const encryptedArray=[]
const decryptedArray=[]
const uniqueEncription=[]
//removing the duplicate from the array of keyword
for(let i=0; i < encrypting.length ; i++)
{
      if(uniqueEncription.indexOf(encrypting[i]) === -1)
      {
          uniqueEncription.push(encrypting[i])
      }
}

pt.forEach(check)

// checking the existence of the letter before in the array
function check(value)
{
   
       const result=uniqueEncription.find((va)=>va === value)
       if(!result)
       {
        uniqueEncription.push(value)
       }
       

}

//This is the encryption logic
function encrypt(message)
{
    const msg=message.split("");
    for(let i=0; i<msg.length; i++)
    {
        const index=pt.indexOf(msg[i])
        if(index === -1)
        {
            encryptedArray.push(msg[i])
        }
        else
        {
            encryptedArray.push(uniqueEncription[index])
        }
        
    }


}
//This is the decryption logic
function decrypt(message)
{
    const msg=message.split("")
    for(let i=0; i<msg.length; i++)
    {
        const index=uniqueEncription.indexOf(msg[i])
        if(index === -1)
        {
            decryptedArray.push(msg[i])
        }
        else
        {
            decryptedArray.push(pt[index])
        }
        

    }

}
// console.log(uniqueEncription)
encrypt("HELLO 123$");
console.log(encryptedArray)
decrypt("DAHHL 123$")
console.log(decryptedArray)

