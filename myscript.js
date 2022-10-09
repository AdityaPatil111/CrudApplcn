var selectedRow=null;

function showAlerts(message,className){
    const div=document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");

    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}

//for deleting;
document.querySelector("#student-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlerts("Customer data deleted","danger");
    }
});


function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#email").value="";
    document.querySelector("#phoneNumber").value="";
    document.querySelector("#product").value="";
    document.querySelector("#total").value="";


}

//add customer;
document.querySelector("#student-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const firstName=document.querySelector("#firstName").value;
    const phoneNumber=document.querySelector("#phoneNumber").value;
    const email=document.querySelector("#email").value;

    const product=document.querySelector("#product").value;
    const totalPrice=document.querySelector("#total").value;

    if(firstName==""||phoneNumber==""||email==""||product==""||totalPrice==""){
        showAlerts("Please fill the fields","danger");
    }
   
    else{
        if(selectedRow==null){
            const list=document.querySelector("#student-list");
            const row=document.createElement("tr");

            row.innerHTML=`<td>${firstName}</td>
                            <td>${phoneNumber}</td>
                            <td>${email}</td>

                            <td>${product}</td>
                            <td>${totalPrice}</td>
                            
                            <td>
                            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                            `;
                            list.appendChild(row);
                            selectedRow=null;
                            showAlerts("Customer added","success");
        }
        else{
            selectedRow.children[0].textContent=firstName;
            selectedRow.children[1].textContent=phoneNumber;
            selectedRow.children[2].textContent=email;

            selectedRow.children[3].textContent=product;
            selectedRow.children[4].textContent=totalPrice;
            
            selectedRow=null;
            showAlerts("Customer info edited","info");
        }
        clearFields();
    }
});


//edit;

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        document.querySelector("#submitBtn").value="Update";
      
        document.querySelector("#submitBtn").addEventListener("click",()=>{
            document.querySelector("#submitBtn").value="Submit";
        });
    selectedRow=target.parentElement.parentElement;

    document.querySelector("#firstName").value= selectedRow.children[0].textContent;
    document.querySelector("#phoneNumber").value=selectedRow.children[1].textContent;
    document.querySelector("#email").value=selectedRow.children[2].textContent;

    document.querySelector("#product").value=selectedRow.children[3].textContent;
    document.querySelector("#total").value=selectedRow.children[4].textContent;

  
   
    }
});


function mycalc(){
    var num1=document.getElementById("one").value;
    var num2=document.getElementById("two").value;
    var total=parseFloat(num1)*parseFloat(num2);
    document.getElementById("total").value="₹ "+total;
}


