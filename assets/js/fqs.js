document.getElementById('faqSearch').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const faqs = document.querySelectorAll('#accordion .card');
    faqs.forEach(faq => {
        const question = faq.querySelector('.card-header button').textContent.toLowerCase();
        const answer = faq.querySelector('.card-body').textContent.toLowerCase();
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            faq.style.display = '';
        } else {
            faq.style.display = 'none';
        }
    });
});