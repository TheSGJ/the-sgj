const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' – TheSGJ',
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © TheSGJ, TheSGJ Tech 
     
      <style jsx>{`
        
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
