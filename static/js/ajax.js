$(function () {
    $('#compress').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = $('#dest_path').find('li').text();
        let filename = prompt('请输入压缩文件名称','');
        if (! filename){
            alert('请输入压缩文件名称');
            return;
        }
        $.ajax({
            url: '/backup/many',
            method: 'get',
            data: {
                destPath: dest_paths+filename,
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
                alert('成功！');
                $('#ori_path').html('');
                $('#dest_path').html('');
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
                alert('成功！');
                $('#ori_path').html('');
                $('#dest_path').html('');
            }
        })
    });

    $('#unlock').on('click', function () {
        let ori_paths = $('#ori_path').find('li').text();
        let dest_paths = $('#dest_path').find('li').text();

        let password = prompt('请输入密码', '');
        if (!password){
            alert('请输入密码');
            return;
        }
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
                alert('成功！');
                $('#ori_path').html('');
                $('#dest_path').html('');
            },
            error:function (e) {
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
                destPath: dest_paths,
                sourcePath: ori_paths,
            },
            success: function () {
                alert('成功！');
                $('#ori_path').html('');
                $('#dest_path').html('');
            }
        })
    })
})