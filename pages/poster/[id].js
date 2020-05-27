import { useRouter } from 'next/router'

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export async function getServerSideProps({ req }) {
  let account = false
  let host = req.headers.host
  if (host.indexOf('localhost:') === 0) {
    account = 'wonglok831'
  } else if (host.indexOf('.our.togethertime.me') !== -1) {
    account = host.split('.our.togethertime.me')[0]
  } else if (host === 'our.togethertime.me') {
    account = false
  }
  return {
    props: {
      account,
      host
    }
  }
}

const Post = ({ host, account }) => {
  const router = useRouter()
  const { id } = router.query
  return <p>Post: {JSON.stringify(id)} {host} {account}</p>
}

export default Post
