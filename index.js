window.addEventListener('scroll', function() {

    let scrollY = window.scrollY;
    let opacity = Math.min(1, 1 - (scrollY / 200));
    document.getElementById('hname').style.opacity = opacity;
    document.getElementById('domain').style.opacity = opacity;
    document.getElementById('hname').style.transition = 'opacity 0.3s linear';
    document.getElementById('domain').style.transition = 'opacity 0.3s linear';

    let aboutScrollY = window.scrollY;
    document.getElementById('about').style.opacity = aboutScrollY;
    document.getElementById('about').style.transition = 'all 0.5s linear';

    let skillScrollY = window.scrollY;
    document.getElementById('skills').style.opacity = skillScrollY;
    document.getElementById('skills').style.transition = 'all 0.5s linear';

    let projectScrollY = window.scrollY;
    document.getElementById('project').style.opacity = projectScrollY;
    document.getElementById('project').style.transition = 'all 0.5s linear';

    let contactScrollY = window.scrollY;
    document.getElementById('contact').style.opacity = contactScrollY;
    document.getElementById('contact').style.transition = 'all 0.5s linear';
});

// PRINT PDF
$(document).ready(function(){
    $('#download_btn').click(function () {
        $('#resume_container').printThis();
    });
});