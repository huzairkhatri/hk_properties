// Basic interactions: mobile menu, modal gallery, contact form stub
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();

const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNavOverlay');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

function submitContact(e){
  e.preventDefault();
  const form = e.target;
  // simple client-side placeholder: open WhatsApp with message
  const name = form.name.value || '';
  const phone = form.phone.value || '';
  const interested = form.interested.value || '';
  const message = form.message.value || '';
  const text = encodeURIComponent(`Hi, My name is ${name}. Phone: ${phone}. Interested in: ${interested}. Message: ${message}`);
  window.open(`https://wa.me/918433599535?text=${text}`, '_blank');
}

// gallery modal for project thumbs
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
if (modal) modal.addEventListener('click', closeModal);
document.querySelectorAll('.thumbs img').forEach(img => {
  img.addEventListener('click', (e) => {
    const full = img.getAttribute('data-full') || img.src;
    openModal(full);
  });
});
function openModal(src){
  modal.classList.remove('hidden');
  modalImg.src = src;
}
function closeModal(){
  modal.classList.add('hidden');
  modalImg.src = '';
}
