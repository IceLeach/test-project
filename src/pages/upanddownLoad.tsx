import { Button, DatePicker, Icon, LocaleProvider, message, Upload } from 'antd';
import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import { FormattedMessage } from 'react-intl';

const lang=window.navigator.language;
class UploadButton extends React.Component{
    // handleClick(){
    //     var formData=new FormData();
    //     var fileField=document.querySelector("input[type='file']");
    //     formData.append('username','abc123');
    //     formData.append('avatar',fileField.files[0]);
    //     fetch('https://example.com/profile/avatar',{
    //         method:'PUT',
    //         body:formData
    //     })
    //     .then(response=>response.json())
    //     .catch(error=>console.error('Error:',error))
    //     .then(response=>console.log('Success:',response));
    // }
    values={
        name:'file',
        action:'//jsonplaceholder.typicode.com/posts/',
        onChange(info){
            if(info.file.status!=='uploading'){
                console.log(info.file,info.fileList);
            }
            if(info.file.status==='done'){
                message.success(`${info.file.name} file uploaded successfully`);
            }else if(info.file.status==='error'){
                message.error(`${info.file.name} file upload failed`);
            }
        }
    }
    render(){
        // return <input type='file' onClick={()=>this.handleClick()} />
        return(
            <label>
                <Upload {...this.values}>
                    <Button>
                        <Icon type='upload'/>{lang==='en-US'?'Click to Upload':'点击上传'}
                    </Button>
                    
                </Upload>
                <LocaleProvider locale={zhCN}>
                    <DatePicker/>
                </LocaleProvider>
            </label>
        )
    }
}
class DownloadButton extends React.Component{
    render(){
        return <Button><a href="http://somehost/somefile.zip" download="filename.zip">{lang==='en-US'?'Download file':'下载'}</a></Button>
    }
}

export default {UploadButton,DownloadButton};