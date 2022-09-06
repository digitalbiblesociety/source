<script>
	import {columns, currentBookChapter} from '$lib/store'
	import CommentaryColumnHeader from './CommentaryColumnHeader.svelte'
	import CommentaryBooks from './CommentaryBooks.svelte'
	export let key

</script>

<CommentaryColumnHeader {key}></CommentaryColumnHeader>
<CommentaryBooks {key}></CommentaryBooks>