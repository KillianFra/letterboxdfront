import { useRouter } from "next/router"



export default function Page() {
    const router = useRouter()
    const { searchContent } = router.query
    return (
        <div>
            <h1>You searched {searchContent}</h1>
        </div>
    )
}