const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © TheSGJ.
      <a href="/feed.xml"><svg xmlns="http://www.w3.org/2000/svg"
     id="RSSicon"
     viewBox="0 0 8 8" width={25} height={25}>

  <title>RSS feed icon</title>

  <style jsx>
    .button {stroke: none; fill: orange;}
    .symbol {stroke: none; fill: white;}
  </style><rect   class="button" width="8" height="8" rx="1.5" /><circle class="symbol" cx="2" cy="6" r="1" /><path   class="symbol" d="m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z" /><path   class="symbol" d="m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z" />

</svg></a>
      <style jsx>{`
        a {
          float: right;
        }
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
