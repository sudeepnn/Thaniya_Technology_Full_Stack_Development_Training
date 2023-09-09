// import { copyFile, constants } from 'node:fs/promises';
const fs=require('fs')
const {copyFile, constants }=fs


function callback(err){
    if(err) throw err;
    console.log('file1.txt was copied to file2.txt')
}

copyFile('file1.txt','file2.txt',callback)
copyFile('file1.txt','file2.txt',constants.COPYFILE_EXCL,callback)

