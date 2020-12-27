import connectSql from '../lib/mysql';

const checkLogin  = async(userName: string, pwd: string ) => {
    const sql = 'select * from user_info where ? and ?';
    try {
        let res:any = await connectSql(sql, { user_name: userName , user_pwd: pwd });
        if(res.length == 1 && res[0].user_name === userName && res[0].user_pwd === pwd) {
            return { msg: "登陆成功", code: 200 }
        } else {
            return { msg: "登陆失败", code: 201 }
        }
    } catch (error) {
        
    }
}

export {
    checkLogin
}