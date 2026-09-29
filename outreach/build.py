"""Build per-venue outreach messages from venues.json.

Writes messages.md (all messages with direct links) and outreach.html
(interactive page: fill in your portfolio link once, then copy/send).
Run: python3 build.py
"""
import json
import pathlib
import urllib.parse

HERE = pathlib.Path(__file__).parent
PORTFOLIO = "{PORTFOLIO}"
MYCONTACT = "{MYCONTACT}"


def short_message(v):
    return (
        f"Hi {v['name']} team 👋\n\n"
        f"I'm Khaled, a web designer based in Doha. {v['hook']}\n\n"
        f"{v['gap_short']} I'd love to design a free homepage mockup for you: {v['angle']}.\n\n"
        f"No cost and no obligation. Can I send it over?\n\n"
        f"Here's a café site I built: {PORTFOLIO}\n\n"
        f"Khaled"
    )


def email_body(v):
    n = v["name"]
    return (
        f"Hi {n} team,\n\n"
        f"My name is Khaled, and I'm a web designer based in Doha. {v['hook']}\n\n"
        f"{v['gap_email']} Instagram is great for showing off, but many people who hear "
        f"about you search Google or Maps first. Without a site, they find someone else, or nothing.\n\n"
        f"Here's what I have in mind for {n}: {v['angle']}.\n\n"
        f"A website would also:\n"
        f"- put your up-to-date menu, hours and location in one link\n"
        f"- let guests book, order or message you on WhatsApp in one tap, with no app commission\n"
        f"- give tourists, companies and event planners confidence before they contact you\n"
        f"- stay yours, whatever happens to Instagram's algorithm\n\n"
        f"My offer: I'll design a free homepage mockup for {n} using your branding, photos and menu, "
        f"so you can see it before deciding anything. No cost, no obligation.\n\n"
        f"Here's a café site I built: {PORTFOLIO}\n\n"
        f"Could we do a quick 10-minute call this week? Or just reply \"yes\" and I'll send the "
        f"mockup within 3 days.\n\n"
        f"Best regards,\n"
        f"Khaled\n"
        f"Web Designer, Doha\n"
        f"{MYCONTACT}\n\n"
        f"If you'd rather not hear from me, just reply \"no thanks\" and I won't follow up."
    )


def links(v, msg):
    out = []
    if v["whatsapp"]:
        out.append(("WhatsApp (message pre-filled)",
                    f"https://wa.me/{v['whatsapp']}?text={urllib.parse.quote(msg)}"))
    if v["instagram"]:
        out.append(("Instagram DM", f"https://ig.me/m/{v['instagram']}"))
        out.append(("Instagram profile", f"https://instagram.com/{v['instagram']}"))
    return out


def build_md(venues):
    lines = [
        "# Outreach messages, one per venue",
        "",
        "Before sending, replace `{PORTFOLIO}` with your portfolio link (e.g. the Jasper Café demo) "
        "and `{MYCONTACT}` with your WhatsApp and email. The interactive page (`outreach.html`) does "
        "this for you and builds the WhatsApp links with your link included.",
        "",
        "- **WhatsApp** links open a chat with the message already typed. Check it, then tap send.",
        "- **Instagram** doesn't allow pre-filled messages, so copy the message, then open the DM link.",
        "- **Email version**: none of these venues publish an email address. Use it if they reply "
        "with one, or if you find one in their Instagram bio.",
        "",
    ]
    for i, v in enumerate(venues, 1):
        msg = short_message(v)
        lines += [f"---", "", f"## {i}. {v['name']} ({v['area']})", "",
                  f"**Priority:** {v['priority']}" + (f" · **Phone:** {v['phone']}" if v["phone"] else "")]
        if v["note"]:
            lines += ["", f"> ⚠️ {v['note']}"]
        lines += ["", "**Contact:**"]
        for label, url in links(v, msg):
            lines.append(f"- [{label}]({url})")
        if v["phone"] and not v["whatsapp"]:
            lines.append(f"- Call: [{v['phone']}](tel:{v['phone'].replace(' ', '')})")
        lines += ["", "**WhatsApp / DM message:**", "", "```text", msg, "```", "",
                  f"<details><summary>Email version (subject: {v['subject']})</summary>", "",
                  "```text", f"Subject: {v['subject']}", "", email_body(v), "```", "", "</details>", ""]
    (HERE / "messages.md").write_text("\n".join(lines))


def build_html(venues):
    data = []
    for v in venues:
        data.append({**v, "short": short_message(v), "email": email_body(v)})
    tpl = (HERE / "outreach.template.html").read_text()
    js = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    (HERE / "outreach.html").write_text(tpl.replace("/*__DATA__*/[]", js))


if __name__ == "__main__":
    venues = json.loads((HERE / "venues.json").read_text())
    build_md(venues)
    build_html(venues)
    print(f"built {len(venues)} venues")
