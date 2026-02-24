const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9101 1020"]');
const cardHolderInput = document.querySelector('input[placeholder="John Doe"]');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.querySelector('.cvv-box input');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', () => {
  const cardNumber = cardNumberInput.value.replace(/\s/g, '');
  const cardHolder = cardHolderInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const cvc = cvcInput.value;

  const expYear = Number(document.querySelector('#year').value);   
  const expMonth = Number(document.querySelector('#month').value);
  const currentDate = new Date();

  if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))) {
    return alert('Card is expired');
  }

  if(cardNumber.length !== 16) return alert('Card number must be 16 digits');
  if(cardHolder === '') return alert('Enter card holder name');
  if(month === '' || year === '') return alert('Enter expiration date');
  if(cvc.length !== 3) return alert('CVC must be 3 digits');
    alert('Payment submitted successfully!');
});