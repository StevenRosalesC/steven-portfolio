import { ImageResponse } from "next/og";


export const alt =
  "Steven Rosales | Full Stack Developer & Software Architect";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090d",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow ambient spots */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(6, 182, 212, 0.18)",
            filter: "blur(90px)",
          }}
        />

        {/* Top bar: Status & Terminal Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            AVAILABLE FOR HIGH-IMPACT ROLES
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#71717a",
              fontFamily: "monospace",
              fontSize: "16px",
            }}
          >
            ~/steven.dev/portfolio
          </div>
        </div>

        {/* Center: Main Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#a78bfa",
              fontSize: "22px",
              fontFamily: "monospace",
              marginBottom: "8px",
            }}
          >
            const developer =
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            &quot;Steven Rosales&quot;
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#22d3ee",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Full Stack Developer &amp; Software Architect
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#a1a1aa",
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            High-concurrency web systems, scalable backend architectures &amp;
            futuristic UI engineering.
          </div>
        </div>

        {/* Bottom bar: Tech badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {["Next.js 16", "React 19", "TypeScript", "NestJS", "PostgreSQL", "Docker"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#e4e4e7",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              color: "#a1a1aa",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            github.com/StevenRosalesC
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
