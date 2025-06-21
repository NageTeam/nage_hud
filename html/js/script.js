$(() => {
    window.addEventListener('message', (event) => {
        const data = event.data;

        if (data.task === 'updateHud') {
            const { health, armor, id } = data.info;

            if (health > 0) {
                $('.hud-health-inside').css({
                    width: `${health}%`,
                    opacity: 1
                });
                $('.hud-health-inside .hud-number').text(health);
            } else {
                $('.hud-health-inside').css({
                    width: `0%`,
                    opacity: 0
                });
                $('.hud-health-inside .hud-number').text('');
            }

            if (armor > 0) {
                $('.hud-armor-inside').css({
                    width: `${armor}%`,
                    opacity: 1
                });
                $('.hud-armor-inside .hud-number').text(armor);
            } else {
                $('.hud-armor-inside').css({
                    width: `0%`,
                    opacity: 0
                });
                $('.hud-armor-inside .hud-number').text('');
            }

            if (id !== undefined) {
                $('#user-id').text(id);
                const idLength = id.toString().length;
                let newWidth = '0.7vw';
                if (idLength === 2) newWidth = '1.2vw';
                else if (idLength === 3) newWidth = '1.7vw';
                else if (idLength === 4) newWidth = '2.2vw';
                else if (idLength >= 5) newWidth = '2.7vw';
                $('.id-box').css('width', newWidth);
            }
        }
    });
});
