import{e as n}from"./app.16b1ab9f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall rust
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>rust <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;rust_analyzer&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>rust <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;rustfmt&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspSettings rust_analyzer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall codelldb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/rust.lua</span>
<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>
dap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;codelldb&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="extra-plugins" tabindex="-1"><a class="header-anchor" href="#extra-plugins" aria-hidden="true">#</a> Extra Plugins</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;rust_analyzer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

lvim<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;simrat39/rust-tools.nvim&quot;</span><span class="token punctuation">,</span>
    config <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">local</span> lsp_installer_servers <span class="token operator">=</span> require <span class="token string">&quot;nvim-lsp-installer.servers&quot;</span>
      <span class="token keyword">local</span> _<span class="token punctuation">,</span> requested_server <span class="token operator">=</span> lsp_installer_servers<span class="token punctuation">.</span>get_server <span class="token string">&quot;rust_analyzer&quot;</span>
      <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;rust-tools&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        tools <span class="token operator">=</span> <span class="token punctuation">{</span>
          autoSetHints <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>
          hover_with_actions <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>
          runnables <span class="token operator">=</span> <span class="token punctuation">{</span>
            use_telescope <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        server <span class="token operator">=</span> <span class="token punctuation">{</span>
          cmd_env <span class="token operator">=</span> requested_server<span class="token punctuation">.</span>_default_options<span class="token punctuation">.</span>cmd_env<span class="token punctuation">,</span>
          on_attach <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>common_on_attach<span class="token punctuation">,</span>
          on_init <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>common_on_init<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span><span class="token punctuation">,</span>
    ft <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;rust&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rs&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,14);function t(p,o){return e}var c=s(a,[["render",t]]);export{c as default};
