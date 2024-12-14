// JavaScript to add 'active' class to the clicked menu item
document.querySelectorAll('.main-menu .navigation li a').forEach(item => {
    item.addEventListener('click', function() {
        // Remove the 'active' class from all menu items
        document.querySelectorAll('.main-menu .navigation li').forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked menu item
        this.parentElement.classList.add('active');
    });
});
