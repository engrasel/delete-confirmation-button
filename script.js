document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
  const deleteBtn = document.getElementById('delete-btn');
  if (event.target.value == 'delete') {
    deleteBtn.removeAttribute('disabled');
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "#fff";
  }
  else {
    deleteBtn.setAttribute('disabled', true);
    deleteBtn.style.backgroundColor = "#fff";
    deleteBtn.style.color = "rgba(213, 57, 72, 0.5)";
  }
});