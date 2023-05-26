<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
    if (user.value) {
        return navigateTo('/')
    }
})

const loginWith = async (provider: any) => {
    const { data, error } = await client.auth.signInWithOAuth({
        provider: provider,
        // @ts-ignore
        redirectTo: `${window.location.origin}/account`,
    })
}
</script>
<template>
    <div
        class="flex items-center justify-center flex-1 min-h-full px-4 py-12 mb-5 sm:px-6 lg:px-8"
    >
        <div class="w-full max-w-sm space-y-10">
            <div>
                <img
                    class="w-auto h-10 mx-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2
                    class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900"
                >
                    Sign in to your account
                </h2>
            </div>
            {{ user }}
            <div class="grid grid-cols-2 gap-4 mt-6">
                <button
                    class="appearance-none flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-md text-lg font-semibold"
                    @click="loginWith('google')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="705.6"
                        height="720"
                        viewBox="0 0 186.69 190.5"
                        xmlns:v="https://vecta.io/nano"
                        class="w-5 h-5"
                    >
                        <g transform="translate(1184.583 765.171)">
                            <path
                                clip-path="none"
                                mask="none"
                                d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                                fill="#4285f4"
                            />
                            <path
                                clip-path="none"
                                mask="none"
                                d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                                fill="#34a853"
                            />
                            <path
                                clip-path="none"
                                mask="none"
                                d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                                fill="#fbbc05"
                            />
                            <path
                                d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                                fill="#ea4335"
                                clip-path="none"
                                mask="none"
                            />
                        </g>
                    </svg>
                    <span class="text-sm font-semibold leading-6">Google</span>
                </button>

                <button
                    class="appearance-none flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                    @click="loginWith('github')"
                >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span class="text-sm font-semibold leading-6">GitHub</span>
                </button>
            </div>
        </div>
    </div>
</template>
