document.addEventListener('click', function(e) {
  const btn = e.target.closest('.delete');
  if (!btn) return;

  const card = btn.closest('.card');
  const status = card.querySelector('.notapplied').innerText;

  
  document.getElementById('total-count').innerText--;
  if (status === 'Interview') document.getElementById('interview-count').innerText--;
  if (status === 'Rejected') document.getElementById('rejected-count').innerText--;

  
  card.parentElement.remove();

  
  const container = document.getElementById('allcard');
  if (container.querySelectorAll('.card').length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 border-2 border-dashed border-gray-300 rounded-xl">
        <p class="text-xl font-bold text-gray-400">No card available</p>
      </div>`;
  }
});