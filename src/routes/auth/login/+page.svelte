<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="post">
	<input name="email" type="email" placeholder="email" autocomplete="email" />
	<input name="password" type="password" placeholder="password" autocomplete="current-password" />
	<button type="submit">Log in</button>
</form>

{#if form?.code === 'unauthorized'}
	<div style="color:red">Unauthorized</div>
{/if}
