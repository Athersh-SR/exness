
        function toggleDropdown() {
            const dropdown = document.getElementById('langDropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const globeBox = document.querySelector('.globeBox');
            if (!globeBox.contains(e.target)) {
                document.getElementById('langDropdown').classList.add('hidden');
            }
        });

        function serviceToggleDropdown() {
            const dropdown = document.getElementById('serviceDropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const serviceBox = document.querySelector('.serviceBox');
            if (!serviceBox.contains(e.target)) {
                document.getElementById('serviceDropdown').classList.add('hidden');
            }
        });

        function NotificationToggle() {
            const dropdown = document.getElementById('notificationDropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const bellBox = document.querySelector('.bellBox');
            if (!bellBox.contains(e.target)) {
                document.getElementById('notificationDropdown').classList.add('hidden');
            }
        });
        function gridBoxToggle() {
            const dropdown = document.getElementById('gridBoxDropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const gridBox = document.querySelector('.gridBox');
            if (!gridBox.contains(e.target)) {
                document.getElementById('gridBoxDropdown').classList.add('hidden');
            }
        });
        function userToggle() {
            const dropdown = document.getElementById('userBoxDropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const userBox = document.querySelector('.userBox');
            if (!userBox.contains(e.target)) {
                document.getElementById('userBoxDropdown').classList.add('hidden');
            }
        });



        function walletToggle() {
            const dropdown = document.getElementById('balancedropdown');
            dropdown.classList.toggle('hidden');
        }
        document.addEventListener('click', function (e) {
            const usdBox = document.querySelector('.usdBox');
            if (!usdBox.contains(e.target)) {
                document.getElementById('balancedropdown').classList.add('hidden');
            }
        });
        $(document).ready(function () {
            $('.realdemo_box div').click(function () {
                $('.realdemo_box div').removeClass('active');
                $(this).addClass('active');

                let selected = $(this).text().trim().toLowerCase();

                if (selected === 'real') {
                    $('.account_box1').show();
                    $('.account_box2').hide();
                } else if (selected === 'demo') {
                    $('.account_box2').show();
                    $('.account_box1').hide();
                }
            });


            $('.account_box1').show();
            $('.account_box2').hide();
        });
        $(document).ready(function () {
            $('.mobile-toggle a').on('click', function (e) {
                e.preventDefault();
                $('.sidebar').toggleClass('sidebaropen');
            });
        });
        $(document).ready(function () {
            $('.real').click(function () {
                $('.tab-underline').css('margin-left', '0');
                $('.real').addClass('active');
                $('.demo').removeClass('active');
            });

            $('.demo').click(function () {
                $('.tab-underline').css('margin-left', '45px');
                $('.demo').css('color', '#000000');
                $('.demo').addClass('active');
                $('.real').removeClass('active');
            });
        });
