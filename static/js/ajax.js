$(function () {

    $('#compress').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });
        console.log(ori_paths);
        let dest_paths = $('#dest_path').find('li').text();
        let filename = prompt('请输入压缩文件名称', '');
        if (!filename) {
            alert('请输入压缩文件名称');
            return;
        }
        $.ajax({
            url: '/backup/many',
            method: 'get',
            data: {
                destPath: dest_paths + filename,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！');
                window.location.reload();
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
                alert('成功！');
                window.location.reload();
            }
        })
    });

    $('#lock').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        let password = prompt('请输入密码', '');
        let pwd = password;

        let filename = prompt('请输入压缩文件名称', '');
        if (!filename) {
            alert('请输入压缩文件名称');
            return;
        }
        $.ajax({
            url: '/backup/encryption',
            method: 'post',
            data: {
                password: pwd,
                destPath: dest_paths + filename,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！');
                window.location.reload();
            }
        })
    });

    $('#unlock').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        let password = prompt('请输入密码', '');
        if (!password) {
            alert('请输入密码');
            return;
        }
        let pwd = password;
        let filename = prompt('请输入压缩文件名称', '');
        if (!filename) {
            alert('请输入压缩文件名称');
            return;
        }
        $.ajax({
            url: '/restore/decryption',
            method: 'post',
            data: {
                password: pwd,
                destPath: dest_paths + filename,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！');
                window.location.reload();
            },
            error: function (e) {
                alert(e);
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
                path2: dest_paths,
                path1: ori_paths,
            },
            success: function (msg) {
                alert(msg);
                window.location.reload();
            }
        })
    })
})