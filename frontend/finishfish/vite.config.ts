import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //ホスト側がdockerコンテナのポート5173にアクセスできるようにする
  server: {
    watch: {
      usePolling: true, // Docker環境でのファイル変更検出を改善
    },
    host: true,          // これでViteサーバーがホストされるIPアドレスにバインドされます
    strictPort: true,    // ポートの競合がある場合でも、指定したポートを使う
    port: 5173,          // 使用するポート（例：5173）
    hmr: {
      host: 'localhost', // ホットリロードのホスト
    },
  },
})
