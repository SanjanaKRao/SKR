(function () {
    // --- Scroll Depth Tracking ---
    var thresholds = [25, 50, 75, 100];
    var fired = {};

    function getScrollPercent() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    }

    window.addEventListener('scroll', function () {
        var percent = getScrollPercent();
        thresholds.forEach(function (threshold) {
            if (percent >= threshold && !fired[threshold]) {
                fired[threshold] = true;
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: threshold + '%',
                    value: threshold
                });
            }
        });
    });

    // --- Resume Click Tracking ---
    var resumeLink = document.querySelector('.resume a');
    if (resumeLink) {
        resumeLink.addEventListener('click', function () {
            gtag('event', 'resume_click', {
                event_category: 'engagement',
                event_label: 'Open Resume'
            });
        });
    }
})();
