let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// Cart
// JavaScript to handle the quantity change
document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        let input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        let input = button.nextElementSibling;
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});

// JavaScript to handle remove item (optional)
document.querySelectorAll('.remove-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let cartItem = link.closest('.cart-item');
        cartItem.remove();
    });
});

//Form Validation
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
    }
  }

function submit(){
    document.getElementById("customerForm").submit();
}