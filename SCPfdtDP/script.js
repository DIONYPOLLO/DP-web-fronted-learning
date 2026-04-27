document.addEventListener('DOMContentLoaded', function() {
    console.log('SCP基金会中国分部网站已加载');
    
    const scpItems = document.querySelectorAll('.scp-item');
    scpItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = '#8b0000';
        });
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = '#ddd';
        });
    });
    
    const warningElement = document.querySelector('.warning');
    if (warningElement) {
        warningElement.addEventListener('click', function() {
            const messages = [
                '【数据删除】',
                '【信息已被抹除】',
                '【权限不足】',
                '【需要5级权限】',
                '【已加密】'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            this.textContent = randomMessage;
        });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    console.log('SCP基金会系统初始化完成');
    console.log('警告：未经授权访问将被记录');
});