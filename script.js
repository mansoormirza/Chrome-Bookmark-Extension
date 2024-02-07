
   let myLeads = []

   const inputEl = document.getElementById("input_el")
   const inputBtn = document.getElementById("input_btn") 
   const ulEl = document.getElementById("ul_el")

   const deleteBtn = document.getElementById("delete_btn")
   const tabBtn = document.getElementById("tab_btn")


  // array is stored in the form of strings in local Storage, so to store it we have to convert back into array

  let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

  if(leadsFromLocalStorage) 
  {
    myLeads = leadsFromLocalStorage
    render(myLeads)
  }


  tabBtn.addEventListener("click", function()
  { 

    chrome.tab.query({active:true, currentWindow:true}, function(tabs){

      myLeads.push(tab[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      render(myLeads)

    })

  })

  function render(Leads){

    let listItems = ""

   for (let count = 0; count < Leads.length; count++)
  {

    // listItems += 
    // "<li><a target='_blank' href='" + myLeads[count] + " '>"+ myLeads[count] + "</a></li>"

    // alternate method
    // const li = document.createElement("li")
    // li.textContent = myLeads[count]
    // ulEl.append(li)

    listItems += 
    `
    <li>
       <a target='_blank' href='${Leads[count]}'> 

         ${Leads[count]}
       </a>
    </li>
   `
  }

  ulEl.innerHTML = listItems
} 



  deleteBtn.addEventListener("dblclick", function()
  {

    localStorage.clear()
    myLeads = []
    render(myLeads)

  })


  inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value) //push the value from user on input field to myLeads arrays
    inputEl.value = "" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //add array into local storage by converting into string
    render(myLeads)

  })











//Practice

/* <div id="container"></div>

container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'> Buy </Button>"

function buy()
{
    container.innerHTML += "<p>Thankyou</p>"

} */


// template String

// const recepient = "James"
// const name = "Mansoor"

// const email = `Hey" ${recepient}  Hows it going ${name}`
// const memail = `Hey"
//  ${recepient}  
//  Hows it going 
//  ${name}`

// console.log(email)
// console.log(memail)



// let myLeads = `["www.awsomelead.com"]`
// myLeads = JSON.parse(myLeads) //convert string into array
// myLeads.push("dhcvkdchv")
// myLeads = JSON.stringify(myLeads) // convert array into strings
// console.log(typeof myLeads)


// localStorage.setItem("myLeads", "www.google.com") // add item in local storage
// console.log(localStorage.getItem("myLeads")) // get that value

