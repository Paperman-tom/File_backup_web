$(function () {
    $('#compress').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = [];
        $('#dest_path').find('li').each(function () {
            dest_paths.push($(this).text());
        });
        //
        // console.log(ori_paths);
        // console.log(dest_paths);
        $.ajax({
            url: '/backup/many',
            method: 'get',
            data: {
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#decompress').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = [];
        $('#dest_path').find('li').each(function () {
            dest_paths.push($(this).text());
        });
        //
        // console.log(ori_paths);
        // console.log(dest_paths);
        $.ajax({
            url: '/restore/decompress',
            method: 'get',
            data: {
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#lock').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = [];
        $('#dest_path').find('li').each(function () {
            dest_paths.push($(this).text());
        });

        let password=confirm('请输入密码');

        pwd = md5(password);
        //
        // console.log(ori_paths);
        // console.log(dest_paths);
        $.ajax({
            url: '/backup/encryption',
            method: 'post',
            data: {
                password:pwd,
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#unlock').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = [];
        $('#dest_path').find('li').each(function () {
            dest_paths.push($(this).text());
        });

        let password=confirm('请输入密码');

        pwd = md5(password);
        //
        // console.log(ori_paths);
        // console.log(dest_paths);
        $.ajax({
            url: '/restore/decryption',
            method: 'post',
            data: {
                password:pwd,
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    });

    $('#check').on('click', function () {
        let ori_paths = [];
        $('#ori_path').find('li').each(function () {
            ori_paths.push($(this).text());
        });

        let dest_paths = [];
        $('#dest_path').find('li').each(function () {
            dest_paths.push($(this).text());
        });
        //
        // console.log(ori_paths);
        // console.log(dest_paths);
        $.ajax({
            url: '/check/check',
            method: 'get',
            data: {
                destPath: ori_paths,
                sourcePath: dest_paths,
            },
            success: function () {
                alert('成功！')
            }
        })
    })
})