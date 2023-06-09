function expo(num, power, callback) {
    if (power === 1) {
      return num;
    }else if(power === 0){
      return 1
    }
    const result = num * expo(num, power - 1);

    if (typeof callback === 'function') {
      callback();
    }
    return result;
  }
 

async function post(){
  const body = document.querySelector('body')

  try {
    const link = await fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(el => el.json())

    console.log(link)

    link.forEach(el => {
      const box = document.createElement('div')
      box.classList.add('container')
      
      const h6UserBody = document.createElement('h6')
      h6UserBody.textContent = el.body

      const title = document.createElement('p')
      title.textContent = el.title

      box.append(h6UserBody,title)
      body.append(box)

    });
  } catch (error) {
    console.log(error);
  }
}


post()




const obj = {
  name: "gela",
  lastName: 'gnolidze',
  address:{
    street: 'rustaveli'
  }
}

function asyncDeepCopy(object){
    return new Promise((resolve, reject) => {
      const result = {}

      if(typeof object === 'object'){
        for(let key in object){
          if(object.hasOwnProperty(key)){
            result[key] = typeof object[key] === 'object' ? asyncDeepCopy(object[key]) : object[key]
          }
        }
        resolve(result)
      }
      reject('its not a object')
    })
}

asyncDeepCopy(obj).then(res => console.log(res))
  .catch(err => console.log(err))

