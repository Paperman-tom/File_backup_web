$(function () {
    $('#compress').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = $('#dest_path').find('li').text();

        $.ajax({
            url: '/backup/many',
            method: 'get',
            data: {
                destPath: dest_paths,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#decompress').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        $.ajax({
            url: '/restore/decompress',
            method: 'get',
            data: {
                destPath: dest_paths,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#lock').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        let password = prompt('请输入密码', '');
        let pwd = md5(password);

        $.ajax({
            url: '/backup/encryption',
            method: 'post',
            data: {
                password: pwd,
                destPath: dest_paths,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#unlock').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        let password = prompt('请输入密码', '');
        let pwd = md5(password);

        $.ajax({
            url: '/restore/decryption',
            method: 'post',
            data: {
                password: pwd,
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#check').on('click', function () {
        let ori_paths = $('#ori_paths').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        $.ajax({
            url: '/check/check',
            method: 'get',
            data: {
                destPath: dest_paths,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    })
})