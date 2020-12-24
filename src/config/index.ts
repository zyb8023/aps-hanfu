interface sqlConfig {
  host: string,
  user: string,
  password: string,
  database : string,
  connectionLimit?:number,
}

const mysqlConfig: sqlConfig = {
  host: '81.68.185.14',
  user: 'root',
  password: 'Zhao.8023',
  database : 'hanfu'
}

export {
  mysqlConfig
}
