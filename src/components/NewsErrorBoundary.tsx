
import React, { FC } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { Button, Result } from 'antd';
import { useHistory } from 'react-router';


const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const history = useHistory()
  return (<Result
    status="500"
    title="发生了错误啦"
    subTitle={error.message}
    extra={<Button type="primary" onClick={() => {
      console.log('点击1');  
    }}>回到首页</Button>}
  />)
}
  ;
const NewsErrorBoundary = (props: any) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
      console.log("点击");

    }}
  >
    {props.children}
  </ErrorBoundary>
)
export default NewsErrorBoundary