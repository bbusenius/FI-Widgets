import Header from './Header'

export default function Layout(props) {
  const { children } = props
  return (
    <div>
      <Header />
      <h1>FI Widgets</h1>
      {children}
      <style jsx global>
        {`
        body {
          padding: 2rem;
          background: #eee;
          font-family: Helvetica, Arial, sans-serif;
        }
        input {
          width: 100%;
          display: block;
        }
        div.widget {
          white-space: pre-wrap;
          margin: 1rem;
          padding: 0 1rem 1rem 1rem;
          background: #fff;
        }
        h2 {
          margin-bottom: 1rem;
        }
        .input-group {
          padding: 6px 0;
          padding-right: 1rem;
        }
        small {
          color: #666;
        }
        .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 1rem;
        }
        .answer {
          font-size: 2rem;
          color: #3eb21a;
        }
      `}
      </style>
    </div>
  )
}
