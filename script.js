
        document.addEventListener('DOMContentLoaded', function() {
            const plans = document.querySelectorAll('.plan');
            const messagePreview = document.getElementById('messagePreview');
            const telegramLink = document.getElementById('telegramLink');
            
            // Select the first plan by default
            let selectedPlan = plans[0];
            selectedPlan.classList.add('selected');
            
            plans.forEach(plan => {
                plan.addEventListener('click', function() {
                    // Remove selected class from all plans
                    plans.forEach(p => p.classList.remove('selected'));
                    
                    // Add selected class to clicked plan
                    plan.classList.add('selected');
                    selectedPlan = plan;
                    
                    // Update message preview
                    updateMessage();
                });
            });
            
            function updateMessage() {
                const price = selectedPlan.getAttribute('data-price');
                const name = selectedPlan.getAttribute('data-name');
                
                const message = `Hi, I want to buy the ${name} plan for $${price}.`;
                
                messagePreview.textContent = message;
                
                // Update Telegram link
                const encodedMessage = encodeURIComponent(message);
                telegramLink.href = `https://t.me/paid_promo0x?text=${encodedMessage}`;
            }
            
            // Animate the CTA button
            setInterval(() => {
                telegramLink.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    telegramLink.style.transform = 'scale(1)';
                }, 500);
            }, 2000);
        });
    