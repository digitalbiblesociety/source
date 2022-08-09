<script>
	import { AudioPlayer } from "svelte-bible-brain"
</script>
	
	
<AudioPlayer 
	key={import.meta.env.VITE_DBP_KEY}
	country_id={import.meta.env.VITE_COUNTRY_SITE} />