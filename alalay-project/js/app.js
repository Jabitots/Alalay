// ALALAY – compiled JavaScript (built from app.jsx). Edit app.jsx, then rebuild.
const {
  useState,
  useMemo,
  useContext,
  createContext
} = React;
const Ctx = createContext();
const P = {
  dash: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
  bell: "M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8",
  chart: "M3 3v18h18M7 15l4-4 3 3 5-6",
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
  store: "M3 9l1-5h16l1 5M4 9v11h16V9M9 20v-6h6v6",
  key: "M21 2l-9.6 9.6M15.5 7.5l3 3M7 14a4 4 0 100 8 4 4 0 000-8",
  user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8",
  log: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M8 13h8M8 17h8",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16M21 21l-4.3-4.3",
  plus: "M12 5v14M5 12h14",
  x: "M18 6L6 18M6 6l12 12",
  edit: "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8M12 9a3 3 0 100 6 3 3 0 000-6",
  out: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
  dl: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
  down: "M6 9l6 6 6-6",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 018 0v4",
  expand: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
  menu: "M3 6h18M3 12h18M3 18h18",
  eyeoff: "M17.9 17.9A10.9 10.9 0 0112 20c-7 0-11-8-11-8a18.5 18.5 0 015.1-5.9M9.9 4.2A9 9 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.2 3.2M14.1 14.1a3 3 0 11-4.2-4.2M1 1l22 22",
  sun: "M12 17a5 5 0 100-10 5 5 0 000 10M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
};
const I = ({
  n,
  s = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: P[n]
}));
const B = ({
  t,
  c
}) => {
  const m = {
    Active: "ok",
    Approved: "ok",
    Accepted: "ok",
    Pending: "wn",
    Inactive: "nt",
    Declined: "er",
    Flagged: "er",
    Suspended: "er",
    Senior: "ok",
    PWD: "wn"
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "bd " + (c || m[t] || "nt")
  }, t);
};
const peso = n => "₱" + n.toLocaleString("en-PH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const hash = s => [...s].reduce((a, c) => a * 31 + c.charCodeAt(0) >>> 0, 7);

/* ---------- mock data ---------- */
const FN = ["Maria", "Jose", "Lourdes", "Ramon", "Teresita", "Antonio", "Remedios", "Felipe"],
  LN = ["Santos", "Reyes", "Cruz", "Garcia", "Bautista", "Aquino"],
  BR = ["Brgy. Batasan Hills", "Brgy. Commonwealth", "Brgy. Holy Spirit", "Brgy. Fairview", "Brgy. Tandang Sora"];
const CH0 = Array.from({
  length: 24
}, (_, i) => ({
  id: `${i % 3 == 0 ? "PWD" : "SC"}-QC-***${642 - i}`,
  name: `${FN[i % 8]} ${LN[i * 5 % 6]}`,
  type: i % 3 == 0 ? "PWD" : "Senior",
  age: i % 3 == 0 ? 30 + i : 60 + i,
  contact: "0917-***-" + String(1000 + i * 37).slice(-4),
  disability: i % 3 == 0 ? ["Mobility", "Visual", "Hearing", "Psychosocial"][(i / 3 | 0) % 4] : "",
  barangay: BR[i % 5],
  status: i % 7 == 6 ? "Inactive" : "Active"
}));
const EST0 = [["Mercury Drug – Taft", "Pharmacy"], ["Jollibee – Vito Cruz", "Restaurant"], ["Rose Pharmacy – Malate", "Pharmacy"], ["SM Supermarket – Manila", "Grocery"], ["Watsons – Robinsons Place", "Pharmacy"], ["Savemore – Pedro Gil", "Grocery"]].map(([name, cat], i) => ({
  id: "EST-" + (201 + i),
  name,
  category: cat,
  owner: LN[i] + " Retail Corp.",
  status: i == 5 ? "Pending" : i == 4 ? "Inactive" : "Active"
}));
const TX0 = Array.from({
  length: 48
}, (_, i) => {
  const e = EST0[i % 4],
    h = CH0[i * 7 % 24],
    amt = 150 + i * 137 % 1800;
  return {
    id: "TX-" + (5001 + i),
    day: i % 14,
    hr: 8 + i * 5 % 13,
    est: e.name,
    holder: h.name,
    type: h.type,
    amount: amt,
    disc: Math.round(amt * .2 * 100) / 100
  };
});
const isoD = d => {
  const x = new Date(2026, 9, 27 + d);
  return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
};
const dayLbl = d => {
  const x = new Date(2026, 10, 9 - (13 - d));
  return x.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
};
const REC0 = [{
  id: "REC-101",
  cat: "Health programs",
  prio: "High",
  title: "Maintenance medicine outreach in Brgy. Commonwealth",
  detail: "Purchases of hypertension maintenance medicines rose 34% among seniors in the last 30 days. Recommend a barangay-level medicine assistance drive.",
  conf: 91,
  basis: "412 pharmacy transactions, 3 establishments",
  status: "Pending",
  date: "Nov 8"
}, {
  id: "REC-102",
  cat: "Compliance review",
  prio: "High",
  title: "Review repeated discounts at one establishment",
  detail: "Seven cards recorded 3+ discounted purchases in a single day at the same branch. Suggest an OSCA verification visit.",
  conf: 84,
  basis: "21 flagged transactions",
  status: "Pending",
  date: "Nov 7"
}, {
  id: "REC-103",
  cat: "Partner network",
  prio: "Medium",
  title: "Add PWD-friendly grocery partners",
  detail: "PWD usage is concentrated in two establishments. Recommend onboarding more partners near Brgy. Holy Spirit.",
  conf: 77,
  basis: "PWD usage by establishment",
  status: "Approved",
  date: "Oct 29"
}, {
  id: "REC-104",
  cat: "Program scheduling",
  prio: "Low",
  title: "Extend senior wellness program schedule",
  detail: "Evening activity is low among seniors; shifting schedules may raise participation.",
  conf: 62,
  basis: "Hourly usage pattern",
  status: "Declined",
  date: "Oct 21"
}];
const REC_NEW = [["Quarterly benefits awareness seminar", "Low usage of dining discounts among PWDs suggests limited awareness. Recommend an awareness seminar.", 73, "Awareness", "Medium"], ["Mobile OSCA desk in high-volume barangay", "Brgy. Tandang Sora shows the highest unredeemed-card ratio. A mobile desk may improve ID renewal.", 81, "Service access", "Medium"]];
const NOT0 = [{
  id: 1,
  t: "Registration",
  m: "Savemore – Pedro Gil submitted an establishment registration.",
  w: "Today, 9:48 AM · 10 min ago",
  r: 0
}, {
  id: 2,
  t: "Unusual",
  m: "Card PWD-QC-***636 used 4 times within 2 hours at Mercury Drug – Taft.",
  w: "Today, 8:58 AM · 1 hr ago",
  r: 0
}, {
  id: 3,
  t: "AI",
  m: "New recommendation ready for review: Maintenance medicine outreach.",
  w: "Today, 6:58 AM · 3 hr ago",
  r: 0
}, {
  id: 4,
  t: "Report",
  m: "Jollibee – Vito Cruz submitted its weekly discount report.",
  w: "Nov 9, 4:15 PM",
  r: 1
}, {
  id: 5,
  t: "Unusual",
  m: "Transaction TX-5014 exceeds the usual discount amount.",
  w: "Nov 9, 11:02 AM",
  r: 1
}, {
  id: 6,
  t: "Registration",
  m: "Watsons – Robinsons Place requested account reactivation.",
  w: "Nov 8, 3:40 PM",
  r: 1
}];
const ACC0 = [["Elena Marquez", "OSCA Admin"], ["Rogelio Dizon", "OSCA Staff"], ["Carla Mendoza", "PDAO Admin"], ["Noel Pascual", "PDAO Staff"], ["Irene Lopez", "OSCA Staff"]].map(([name, role], i) => ({
  id: "USR-" + (31 + i),
  name,
  email: name.split(" ")[0].toLowerCase() + "@alalay.gov.ph",
  role,
  status: i == 4 ? "Inactive" : "Active"
}));
const CSH0 = [["Paolo Rivera", "Mercury Drug – Taft"], ["Gina Alonzo", "Jollibee – Vito Cruz"], ["Mark Tan", "SM Supermarket – Manila"], ["Joy Lim", "Rose Pharmacy – Malate"]].map(([name, est], i) => ({
  id: "CSH-" + (11 + i),
  name,
  establishment: est,
  status: i == 3 ? "Inactive" : "Active"
}));
const LOG0 = Array.from({
  length: 36
}, (_, i) => {
  const c = ["Login", "Logout", "Record Edit", "Recommendation"][i % 4],
    u = ACC0[i % 4].name;
  return {
    id: i + 1,
    time: `Nov ${9 - Math.floor(i / 6)}, ${8 + i * 3 % 10}:${String(i * 13 % 60).padStart(2, "0")}`,
    user: u,
    cat: c,
    action: {
      Login: "Signed in",
      Logout: "Signed out",
      "Record Edit": "Updated cardholder " + CH0[i % 24].id,
      Recommendation: (i % 8 == 3 ? "Accepted " : "Declined ") + "REC-10" + (1 + i % 4)
    }[c]
  };
});
const addLog = (cat, action) => LOG0.unshift({
  id: Date.now() + Math.random(),
  time: "Just now",
  user: window.__me || "Elena Marquez",
  cat,
  action
});
const PAGES = [["dash", "Dashboard", "dash"], ["notif", "Notifications", "bell"], ["rec", "Cardholder Records", "users"], ["ana", "Card Usage Analytics", "chart"], ["ai", "AI Recommendations", "spark"], ["mon", "Establishment Monitoring and Reports", "store"], ["est", "Establishment Account Management", "key"], ["acc", "Account Management", "user"], ["log", "System Logs", "log"]];

/* ---------- shared components ---------- */
const Modal = ({
  title,
  onClose: oc,
  children,
  w
}) => {
  const [out, setOut] = useState(false);
  const onClose = () => {
    if (out) return;
    setOut(true);
    setTimeout(oc, 150);
  };
  React.useEffect(() => {
    const f = e => e.key == "Escape" && onClose();
    addEventListener("keydown", f);
    return () => removeEventListener("keydown", f);
  }, [out]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ov" + (out ? " out" : ""),
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    className: "mod " + (w ? "w " : "") + (out ? "out" : ""),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "ib",
    onClick: onClose,
    "aria-label": "Close dialog"
  }, /*#__PURE__*/React.createElement(I, {
    n: "x"
  }))), children));
};
const Tabs = ({
  tabs,
  v,
  set
}) => /*#__PURE__*/React.createElement("div", {
  className: "tabs"
}, tabs.map(t => /*#__PURE__*/React.createElement("button", {
  key: t,
  className: "tab " + (v == t ? "on" : ""),
  onClick: () => set(t)
}, t)));
const Table = ({
  cols,
  rows,
  size = 7
}) => {
  const [p, setP] = useState(0);
  const pages = Math.max(1, Math.ceil(rows.length / size));
  const pg = Math.min(p, pages - 1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.l
  }, c.l)))), /*#__PURE__*/React.createElement("tbody", {
    key: pg + "|" + rows.length + "|" + (rows[0] ? rows[0].id || rows[0].l || "" : ""),
    className: "tfade"
  }, rows.slice(pg * size, pg * size + size).map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i
  }, cols.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.l
  }, c.r ? c.r(r) : r[c.k])))), !rows.length && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: cols.length,
    className: "empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eic"
  }, /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 24
  })), /*#__PURE__*/React.createElement("b", null, "No matching records"), "Try a different search or clear your filters."))))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mut sp"
  }, rows.length, " records · Page ", pg + 1, " of ", pages), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    disabled: pg == 0,
    onClick: () => setP(pg - 1)
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    disabled: pg >= pages - 1,
    onClick: () => setP(pg + 1)
  }, "Next")));
};
const Search = ({
  v,
  set,
  ph = "Search..."
}) => /*#__PURE__*/React.createElement("div", {
  className: "sbox",
  style: {
    minWidth: 220
  }
}, /*#__PURE__*/React.createElement(I, {
  n: "search",
  s: 16
}), /*#__PURE__*/React.createElement("input", {
  value: v,
  onChange: e => set(e.target.value),
  placeholder: ph
}));
const Sel = ({
  v,
  set,
  opts,
  all
}) => /*#__PURE__*/React.createElement("select", {
  value: v,
  onChange: e => set(e.target.value),
  style: {
    width: "auto"
  }
}, all && /*#__PURE__*/React.createElement("option", {
  value: ""
}, all), opts.map(o => /*#__PURE__*/React.createElement("option", {
  key: o
}, o)));
function Crud({
  all,
  setAll,
  pred = () => true,
  cols,
  fields,
  noun,
  prefix,
  extra,
  view,
  ro,
  logCat
}) {
  const {
    toast
  } = useContext(Ctx);
  const [q, setQ] = useState("");
  const [m, setM] = useState(null);
  const [v, setV] = useState(null);
  const [sf, setSf] = useState("");
  const rows = all.filter(pred).filter(r => JSON.stringify(r).toLowerCase().includes(q.toLowerCase())).filter(r => !sf || r.status == sf);
  const save = () => {
    const f = m.f;
    if (!f[fields[0].k]) {
      toast("Please fill in the required fields");
      return;
    }
    if (f.id) {
      setAll(all.map(r => r.id == f.id ? f : r));
      toast(noun + " updated");
      logCat && addLog(logCat, "Updated " + noun.toLowerCase() + " " + f.id);
    } else {
      const nid = prefix + (prefix.endsWith("*") ? String(643 + all.length) : 1000 + all.length + 1);
      setAll([{
        ...f,
        id: nid
      }, ...all]);
      toast(noun + " added");
      logCat && addLog(logCat, "Added " + noun.toLowerCase() + " " + nid);
    }
    setM(null);
  };
  const actions = {
    l: "Actions",
    r: r => /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        gap: 6
      }
    }, view && /*#__PURE__*/React.createElement("button", {
      className: "btn s",
      onClick: () => setV(r)
    }, /*#__PURE__*/React.createElement(I, {
      n: "eye",
      s: 14
    }), "View"), !ro && /*#__PURE__*/React.createElement("button", {
      className: "btn s",
      onClick: () => setM({
        f: {
          ...r
        }
      })
    }, /*#__PURE__*/React.createElement(I, {
      n: "edit",
      s: 14
    }), "Edit"), !ro && extra && extra(r))
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Search, {
    v: q,
    set: setQ
  }), /*#__PURE__*/React.createElement(Sel, {
    v: sf,
    set: setSf,
    all: "All statuses",
    opts: [...new Set(all.map(r => r.status))]
  }), /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), !ro && /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: () => setM({
      f: Object.fromEntries([["status", "Active"], ...fields.filter(x => x.o).map(x => [x.k, x.o[0]])])
    })
  }, /*#__PURE__*/React.createElement(I, {
    n: "plus",
    s: 16
  }), "Add ", noun)), /*#__PURE__*/React.createElement(Table, {
    cols: [...cols, actions],
    rows: rows
  }), m && /*#__PURE__*/React.createElement(Modal, {
    title: (m.f.id ? "Edit " : "Add ") + noun,
    onClose: () => setM(null)
  }, fields.map(x => /*#__PURE__*/React.createElement("div", {
    className: "fld",
    key: x.k
  }, /*#__PURE__*/React.createElement("label", null, x.l), x.o ? /*#__PURE__*/React.createElement("select", {
    value: m.f[x.k] || "",
    onChange: e => setM({
      f: {
        ...m.f,
        [x.k]: e.target.value
      }
    })
  }, x.o.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))) : /*#__PURE__*/React.createElement("input", {
    value: m.f[x.k] || "",
    onChange: e => setM({
      f: {
        ...m.f,
        [x.k]: e.target.value
      }
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => setM(null)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: save
  }, "Save"))), v && /*#__PURE__*/React.createElement(Modal, {
    title: noun + " Details",
    onClose: () => setV(null)
  }, view(v)));
}

/* ---------- charts (inline SVG) ---------- */
const Bars = ({
  data,
  h = 200,
  fmt = x => x
}) => {
  const [hv, setH] = useState(null);
  const mx = Math.max(1, ...data.map(d => d.v));
  const w = 100 / data.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      color: "var(--mut)",
      fontSize: 12
    }
  }, hv != null ? `${data[hv].l}: ${fmt(data[hv].v)}` : "Hover a bar for details"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 400 ${h}`,
    width: "100%",
    height: h,
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Bar chart"
  }, [0, .5, 1].map(f => /*#__PURE__*/React.createElement("line", {
    key: f,
    x1: "0",
    x2: "400",
    y1: h - 20 - f * (h - 30),
    y2: h - 20 - f * (h - 30),
    stroke: "var(--bd)",
    strokeDasharray: "3 3"
  })), data.map((d, i) => /*#__PURE__*/React.createElement("rect", {
    className: "gr",
    style: {
      animationDelay: i * 25 + "ms"
    },
    key: i,
    x: i * (400 / data.length) + 3,
    width: 400 / data.length - 6,
    y: h - 20 - d.v / mx * (h - 30),
    height: d.v / mx * (h - 30),
    rx: "3",
    fill: hv == i ? "#4b5694" : "#7288ae",
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      fontSize: 10,
      color: "var(--mut)"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: w + "%",
      textAlign: "center",
      overflow: "hidden"
    }
  }, d.l.split(" ")[d.l.includes(" ") ? 1 : 0]))));
};
const Line = ({
  data
}) => {
  const mx = Math.max(1, ...data.map(d => d.v));
  const pts = data.map((d, i) => [10 + i * (380 / (data.length - 1)), 170 - d.v / mx * 150]);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 190",
    width: "100%",
    height: "200"
  }, /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: "#4b5694",
    strokeWidth: "3",
    points: pts.map(p => p.join(",")).join(" ")
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "4",
    style: {
      fill: "var(--tx)"
    }
  }, /*#__PURE__*/React.createElement("title", null, data[i].l, ": ", data[i].v))));
};
const HBars = ({
  data
}) => {
  const mx = Math.max(1, ...data.map(d => d.v));
  return /*#__PURE__*/React.createElement("div", null, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.l,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }, d.l), /*#__PURE__*/React.createElement("b", null, peso(d.v))), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: d.v / mx * 100 + "%"
    }
  })))));
};
const RM = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches);
function useCount(v, on) {
  const str = String(v),
    m = on && str.match(/^(₱?)([\d,]+)(\.\d+)?$/);
  const tgt = m ? parseFloat((m[2] + (m[3] || "")).replace(/,/g, "")) : 0,
    dec = m && m[3] ? m[3].length - 1 : 0;
  const last = React.useRef(0);
  const [n, setN] = useState(m ? RM() ? tgt : 0 : null);
  React.useEffect(() => {
    if (!m) return;
    if (RM()) {
      setN(tgt);
      last.current = tgt;
      return;
    }
    const from = last.current,
      t0 = performance.now(),
      d = from ? 350 : 800;
    let f;
    const tick = t => {
      const p = Math.min(1, (t - t0) / d),
        e = 1 - Math.pow(1 - p, 3),
        val = from + (tgt - from) * e;
      last.current = val;
      setN(val);
      if (p < 1) f = requestAnimationFrame(tick);
    };
    f = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(f);
  }, [tgt]);
  if (!m || n == null) return v;
  return m[1] + n.toLocaleString("en-PH", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  });
}
function useLoad(ms) {
  const [ld, setLd] = useState(!RM());
  React.useEffect(() => {
    if (!ld) return;
    const t = setTimeout(() => setLd(false), ms);
    return () => clearTimeout(t);
  }, []);
  return ld;
}
const Stat = ({
  l,
  v,
  s,
  anim
}) => {
  const c = useCount(v, anim);
  return /*#__PURE__*/React.createElement("div", {
    className: "fig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, c), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, s));
};
const DashSkel = () => /*#__PURE__*/React.createElement("div", {
  className: "grid",
  "aria-busy": "true",
  "aria-label": "Loading dashboard"
}, /*#__PURE__*/React.createElement("div", {
  className: "row"
}, /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: 190,
    height: 38
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: 160,
    height: 38
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: 130,
    height: 38
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "grid g3",
  style: {
    gap: 16
  }
}, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "card"
}, /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "60%",
    height: 12
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "40%",
    height: 30,
    marginTop: 12
  }
})))), /*#__PURE__*/React.createElement("div", {
  className: "grid g2"
}, /*#__PURE__*/React.createElement("div", {
  className: "card"
}, /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "35%",
    height: 12
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "100%",
    height: 200,
    marginTop: 14
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "card"
}, /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "45%",
    height: 12
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "100%",
    height: 12,
    marginTop: 20
  }
}), /*#__PURE__*/React.createElement("i", {
  className: "sk",
  style: {
    width: "80%",
    height: 12,
    marginTop: 14
  }
}))), /*#__PURE__*/React.createElement("div", {
  className: "card"
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("i", {
  key: i,
  className: "sk",
  style: {
    width: "100%",
    height: 16,
    marginTop: i ? 14 : 0
  }
}))));
const group = (rows, key, val) => {
  const o = {};
  rows.forEach(r => {
    o[key(r)] = (o[key(r)] || 0) + val(r);
  });
  return o;
};

/* ---------- WM-1 Login ---------- */
const PHOTO = "assets/login-photo.jpg";
function Login({
  onIn,
  onBoard
}) {
  const {
    toast
  } = useContext(Ctx);
  const [fp, setFp] = useState(false);
  const [rm, setRm] = useState(true);
  const [s, setS] = useState(false);
  const [rl, setRl] = useState("OSCA");
  const [u, setU] = useState(() => {
    try {
      return localStorage.getItem("alalay-user") || "";
    } catch (e) {
      return "";
    }
  });
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const submit = () => {
    if (busy) return;
    if (!u.trim() || !pw) {
      setErr("Enter your username or email and your password.");
      return;
    }
    setErr("");
    try {
      rm ? localStorage.setItem("alalay-user", u) : localStorage.removeItem("alalay-user");
    } catch (e) {}
    setBusy(true);
    setTimeout(() => onIn(rl), 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp",
    style: {
      backgroundImage: `url(${PHOTO})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    s: 38
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "ALALAY"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, "Discount Management System"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Discounts that reach the people they are meant for."), /*#__PURE__*/React.createElement("p", null, "Monitor Senior Citizen and PWD discount usage across partner establishments, and review issues before they become problems.")), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "Authorized personnel only. Sign-ins and record changes are logged.")), /*#__PURE__*/React.createElement("div", {
    className: "lf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lcard",
    onKeyDown: e => e.key == "Enter" && submit()
  }, /*#__PURE__*/React.createElement("div", {
    className: "mlogo"
  }, /*#__PURE__*/React.createElement(Mark, {
    s: 34
  }), /*#__PURE__*/React.createElement("b", null, "ALALAY")), /*#__PURE__*/React.createElement("h1", {
    className: "lt",
    style: {
      textAlign: "center"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    className: "mut",
    style: {
      margin: "4px 0 22px",
      textAlign: "center"
    }
  }, "Choose your account type, then enter your credentials."), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", {
    id: "rl-l"
  }, "Sign in as"), /*#__PURE__*/React.createElement("div", {
    className: "roles",
    role: "radiogroup",
    "aria-labelledby": "rl-l"
  }, ["OSCA", "PDAO"].map(k => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: k,
    role: "radio",
    "aria-checked": rl == k,
    className: rl == k ? "on" : "",
    onClick: () => setRl(k)
  }, k)))), err && /*#__PURE__*/React.createElement("div", {
    className: "lerr",
    role: "alert"
  }, err), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lu"
  }, "Username or email"), /*#__PURE__*/React.createElement("div", {
    className: "inp"
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    id: "lu",
    autoComplete: "username",
    placeholder: "name@alalay.gov.ph",
    value: u,
    onChange: e => setU(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lp"
  }, "Password"), /*#__PURE__*/React.createElement("div", {
    className: "inp"
  }, /*#__PURE__*/React.createElement(I, {
    n: "lock",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    id: "lp",
    type: s ? "text" : "password",
    autoComplete: "current-password",
    placeholder: "Enter your password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "eye",
    "aria-label": s ? "Hide password" : "Show password",
    onClick: () => setS(!s)
  }, /*#__PURE__*/React.createElement(I, {
    n: s ? "eyeoff" : "eye",
    s: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      margin: "4px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "chk"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rm,
    onChange: e => setRm(e.target.checked)
  }), "Remember me"), /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setFp(true);
    }
  }, "Forgot password?")), fp && /*#__PURE__*/React.createElement(Modal, {
    title: "Reset password",
    onClose: () => setFp(false)
  }, /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "Enter your account email. The live system would send a reset link to it. This prototype only simulates this step."), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "fe"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    id: "fe",
    placeholder: "name@alalay.gov.ph"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => setFp(false)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: () => {
      setFp(false);
      toast("Reset link sent (simulated)");
    }
  }, "Send reset link"))), /*#__PURE__*/React.createElement("button", {
    className: "btn p lbtn",
    onClick: submit,
    disabled: busy
  }, busy && /*#__PURE__*/React.createElement("i", {
    className: "sp2"
  }), busy ? "Signing in…" : "Sign in as " + rl), /*#__PURE__*/React.createElement("p", {
    className: "lfoot"
  }, "Prototype for demonstration. Any entry signs you in; no real authentication is used."))));
}

/* ---------- WM-2 Dashboard ---------- */
function Dash() {
  const [e, setE] = useState("");
  const [t, setT] = useState("");
  const [r, setR] = useState("14");
  const ld = useLoad(450);
  const rows = TX0.filter(x => (!e || x.est == e) && (!t || x.type == t) && x.day >= 14 - +r);
  const byDay = Object.entries(group(rows, x => x.day, x => x.disc)).map(([d, v]) => ({
    l: dayLbl(+d),
    v: Math.round(v)
  }));
  if (ld) return /*#__PURE__*/React.createElement(DashSkel, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Sel, {
    v: e,
    set: setE,
    all: "All establishments",
    opts: EST0.map(x => x.name)
  }), /*#__PURE__*/React.createElement(Sel, {
    v: t,
    set: setT,
    all: "All cardholders",
    opts: ["Senior", "PWD"]
  }), /*#__PURE__*/React.createElement("select", {
    value: r,
    onChange: x => setR(x.target.value),
    style: {
      width: "auto"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "Last 7 days"), /*#__PURE__*/React.createElement("option", {
    value: "14"
  }, "Last 14 days"))), /*#__PURE__*/React.createElement("div", {
    className: "grid g3"
  }, /*#__PURE__*/React.createElement(Stat, {
    anim: true,
    l: "Total recorded transactions",
    v: rows.length,
    s: "Within selected filters"
  }), /*#__PURE__*/React.createElement(Stat, {
    anim: true,
    l: "Total discounts given",
    v: peso(rows.reduce((a, x) => a + x.disc, 0)),
    s: "20% statutory discount"
  }), /*#__PURE__*/React.createElement(Stat, {
    anim: true,
    l: "Participating establishments",
    v: EST0.filter(x => x.status == "Active").length,
    s: "Active accounts"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid g2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Discount activity (₱ per day)"), byDay.length ? /*#__PURE__*/React.createElement(Bars, {
    data: byDay,
    fmt: peso
  }) : /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No data for these filters.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Cardholder distribution"), ["Senior", "PWD"].map(k => {
    const n = rows.filter(x => x.type == k).length;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp"
    }, k), /*#__PURE__*/React.createElement("b", null, n)), /*#__PURE__*/React.createElement("div", {
      className: "bar"
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: (rows.length ? n / rows.length * 100 : 0) + "%",
        background: k == "PWD" ? "#7288AE" : "#4B5694"
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Recent monitoring activity"), /*#__PURE__*/React.createElement(Table, {
    size: 5,
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Date",
      r: x => dayLbl(x.day)
    }, {
      l: "Establishment",
      k: "est"
    }, {
      l: "Cardholder",
      k: "holder"
    }, {
      l: "Type",
      r: x => /*#__PURE__*/React.createElement(B, {
        t: x.type
      })
    }, {
      l: "Amount",
      r: x => peso(x.amount)
    }, {
      l: "Discount",
      r: x => peso(x.disc)
    }],
    rows: [...rows].sort((a, b) => b.day - a.day)
  })));
}

/* ---------- WM-3 Notifications ---------- */
const NL = {
  Registration: ["est", "Review registration"],
  Unusual: ["mon", "View transactions"],
  AI: ["ai", "Review"],
  Report: ["mon", "View reports"]
};
function Notif({
  n,
  setN,
  go
}) {
  const {
    toast
  } = useContext(Ctx);
  const [f, setF] = useState("All");
  const M = {
    All: "",
    Registration: "Registration",
    Unusual: "Unusual",
    AI: "AI",
    Report: "Report"
  };
  const show = n.filter(x => !M[f] || x.t == M[f]);
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(M),
    v: f,
    set: setF
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mut sp"
  }, n.filter(x => !x.r).length, " unread"), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: () => {
      setN(n.map(x => ({
        ...x,
        r: 1
      })));
      toast("All notifications marked as read");
    }
  }, "Mark all as read")), show.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.id,
    className: "li " + (x.r ? "" : "un"),
    onClick: () => setN(n.map(y => y.id == x.id ? {
      ...y,
      r: 1
    } : y))
  }, /*#__PURE__*/React.createElement(B, {
    t: {
      Registration: "Registration",
      Unusual: "Unusual",
      AI: "AI Recommendation",
      Report: "Report"
    }[x.t],
    c: x.t == "Unusual" ? "er" : x.t == "AI" ? "ok" : "wn"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: x.r ? 400 : 600
    }
  }, x.m), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, x.w)), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: e => {
      e.stopPropagation();
      setN(n.map(y => y.id == x.id ? {
        ...y,
        r: 1
      } : y));
      go && go(NL[x.t][0]);
    }
  }, NL[x.t][1]))), !show.length && /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "Nothing here."));
}

/* ---------- WM-4 Records ---------- */
const QR = ({
  id
}) => {
  let h = hash(id);
  const c = [];
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
    const f = x < 7 && y < 7 || x > 13 && y < 7 || x < 7 && y > 13;
    let on;
    if (f) {
      const a = x % 14,
        b = y % 14;
      on = a == 0 || a == 6 || b == 0 || b == 6 || a > 1 && a < 5 && b > 1 && b < 5;
    } else {
      h = h * 1103515245 + 12345 >>> 0;
      on = h >>> 16 & 1;
    }
    on && c.push(/*#__PURE__*/React.createElement("rect", {
      key: x + "-" + y,
      x: x,
      y: y,
      width: "1",
      height: "1"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "-1 -1 23 23",
    width: "130",
    style: {
      background: "#fff",
      borderRadius: 8,
      padding: 4
    },
    fill: "#111844"
  }, c);
};
const Barcode = ({
  id
}) => {
  let h = hash(id),
    x = 0;
  const b = [];
  for (let i = 0; i < 34; i++) {
    h = h * 1664525 + 1013904223 >>> 0;
    const w = 1 + (h >>> 20) % 3;
    if (i % 2 == 0) b.push(/*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x,
      width: w,
      height: "40"
    }));
    x += w;
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${x} 40`,
    width: "200",
    height: "46",
    style: {
      background: "#fff",
      borderRadius: 6,
      padding: 4
    },
    fill: "#111"
  }, b);
};
function Records({
  all,
  setAll,
  role
}) {
  const [t, setT] = useState("Senior Citizen Records");
  const sen = t.startsWith("Senior");
  const ro = (sen ? "OSCA" : "PDAO") != role;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Senior Citizen Records", "PWD Records"],
    v: t,
    set: setT
  }), ro && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("b", null, "View only."), " ", /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, sen ? "Senior Citizen" : "PWD", " records are managed by ", sen ? "OSCA" : "PDAO", ". You are signed in as ", role, ", so adding and editing are turned off.")), /*#__PURE__*/React.createElement(Crud, {
    key: t,
    ro: ro,
    logCat: "Record Edit",
    all: all,
    setAll: setAll,
    pred: r => sen ? r.type == "Senior" : r.type == "PWD",
    noun: sen ? "Senior Citizen" : "PWD Cardholder",
    prefix: sen ? "SC-QC-***" : "PWD-QC-***",
    fields: [{
      k: "name",
      l: "Full name"
    }, {
      k: "age",
      l: "Age"
    }, {
      k: "contact",
      l: "Contact number"
    }, {
      k: "barangay",
      l: "Barangay",
      o: BR
    }, {
      k: "type",
      l: "Category",
      o: [sen ? "Senior" : "PWD"]
    }, ...(sen ? [] : [{
      k: "disability",
      l: "Disability type",
      o: ["Mobility", "Visual", "Hearing", "Psychosocial"]
    }]), {
      k: "status",
      l: "Status",
      o: ["Active", "Inactive"]
    }],
    cols: [{
      l: "Cardholder ID",
      r: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, r.id), /*#__PURE__*/React.createElement("div", {
        className: "mut",
        style: {
          fontSize: 12
        }
      }, r.type == "PWD" ? "PDAO" : "OSCA", " · Quezon City"))
    }, {
      l: "Name",
      k: "name"
    }, {
      l: "Age",
      k: "age"
    }, {
      l: "Barangay",
      k: "barangay"
    }, {
      l: "Status",
      r: r => /*#__PURE__*/React.createElement(B, {
        t: r.status
      })
    }],
    view: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        alignItems: "flex-start",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(QR, {
      id: r.id
    }), /*#__PURE__*/React.createElement("div", {
      className: "sp"
    }, [["Card ID", r.id], ["Name", r.name], ["Category", r.type], ["Age", r.age], ["Barangay", r.barangay], ["Contact", r.contact || "—"], ...(r.disability ? [["Disability type", r.disability]] : [])].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
      key: a,
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mut",
      style: {
        width: 90
      }
    }, a), /*#__PURE__*/React.createElement("b", null, b))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mut",
      style: {
        width: 90
      }
    }, "Status"), /*#__PURE__*/React.createElement(B, {
      t: r.status
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("label", null, "Barcode reference"), /*#__PURE__*/React.createElement(Barcode, {
      id: r.id
    }), /*#__PURE__*/React.createElement("div", {
      className: "mut",
      style: {
        fontSize: 12,
        marginTop: 4
      }
    }, r.id)))
  }));
}
function DayChart({
  rows = TX0
}) {
  const [r, setR] = useState(14);
  const [h, setH] = useState(null);
  const all = Array.from({
    length: 14
  }, (_, d) => {
    const x = rows.filter(t => t.day == d);
    return {
      l: dayLbl(d),
      n: x.length,
      disc: x.reduce((a, t) => a + t.disc, 0)
    };
  });
  const days = all.slice(14 - r),
    L = days.length,
    top = Math.max(2, Math.ceil(Math.max(...days.map(d => d.n)) / 2) * 2);
  const avg = days.reduce((a, d) => a + d.n, 0) / L,
    pk = days.reduce((a, d) => d.n > a.n ? d : a, days[0]),
    hd = h != null ? days[h] : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 16
    }
  }, "Transactions per day"), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 13
    }
  }, "Discounted purchases recorded each day")), /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "group",
    "aria-label": "Date range"
  }, [7, 14].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-pressed": r == n,
    className: r == n ? "on" : "",
    onClick: () => {
      setR(n);
      setH(null);
    }
  }, "Last ", n, " days")))), /*#__PURE__*/React.createElement("div", {
    className: "dc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcy"
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, top / 2), /*#__PURE__*/React.createElement("span", null, top)), /*#__PURE__*/React.createElement("div", {
    className: "dcp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcg",
    style: {
      bottom: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dcg",
    style: {
      bottom: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dca",
    style: {
      bottom: avg / top * 100 + "%"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Avg ", avg.toFixed(1))), days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dcc",
    style: {
      left: i * 100 / L + "%",
      width: 100 / L + "%"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dcb" + (d == pk ? " pk" : ""),
    "aria-label": `${d.l}: ${d.n} transactions, ${peso(d.disc)} in discounts`,
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    onFocus: () => setH(i),
    onBlur: () => setH(null)
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      height: d.n / top * 100 + "%"
    }
  })))), hd && /*#__PURE__*/React.createElement("div", {
    className: "dct",
    style: {
      left: (h + .5) * 100 / L + "%",
      bottom: `calc(${hd.n / top * 100}% + 10px)`
    }
  }, /*#__PURE__*/React.createElement("b", null, hd.l), /*#__PURE__*/React.createElement("br", null), hd.n, " transactions · ", peso(hd.disc))), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "dcx",
    style: {
      gridTemplateColumns: `repeat(${L},1fr)`
    }
  }, days.map((d, i) => {
    const p = d.l.split(" ");
    return /*#__PURE__*/React.createElement("span", {
      key: i
    }, p[1], (i == 0 || p[0] != days[i - 1].l.split(" ")[0]) && /*#__PURE__*/React.createElement("small", null, p[0]));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 16,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "lg",
    style: {
      background: "#7288ae"
    }
  }), "Transactions"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "lg",
    style: {
      background: "#4b5694"
    }
  }), "Peak day"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "lg dash"
  }), "Daily average"), /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("b", null, "Peak: ", pk.l, " · ", pk.n, " transactions")));
}
/* ---------- WM-5 Analytics ---------- */
function Analytics() {
  const [t, setT] = useState("Usage by Date");
  const [fe, setFe] = useState("");
  const [ft, setFt] = useState("");
  const rows = TX0.filter(x => (!fe || x.est == fe) && (!ft || x.type == ft));
  const day = Object.entries(group(rows, x => x.day, () => 1)).map(([d, v]) => ({
    l: dayLbl(+d),
    v
  }));
  const est = Object.entries(group(rows, x => x.est, x => x.disc)).map(([l, v]) => ({
    l,
    v
  })).sort((a, b) => b.v - a.v);
  const hr = Object.entries(group(rows, x => x.hr < 12 ? "Morning" : x.hr < 17 ? "Afternoon" : "Evening", () => 1)).map(([l, v]) => ({
    l,
    v
  }));
  const pk = day.length ? day.reduce((a, d) => d.v > a.v ? d : a, day[0]) : null,
    busy = hr.length ? hr.reduce((a, d) => d.v > a.v ? d : a, hr[0]) : null;
  const rep = Object.values(group(rows, x => x.holder + "|" + x.day, () => 1)).filter(n => n > 1).length,
    tot = rows.reduce((a, x) => a + x.disc, 0);
  const reps = Object.entries(group(rows, x => x.holder + "|" + x.day, () => 1)).filter(([, n]) => n > 1).map(([k, n]) => {
    const [h, d] = k.split("|");
    return {
      id: k,
      holder: h,
      date: dayLbl(+d),
      n,
      est: [...new Set(rows.filter(x => x.holder == h && x.day == +d).map(x => x.est))].join(", ")
    };
  });
  const unus = rows.filter(x => x.disc >= 300).sort((a, b) => b.disc - a.disc);
  const pats = [[est.length && tot ? `${est[0].l} accounts for ${Math.round(est[0].v / tot * 100)}% of discounts` : "No data for these filters", "Insight"], [busy ? `${busy.l} is the busiest period (${busy.v} transactions)` : "No time-of-day data", "Insight"], [rep ? `${rep} card${rep > 1 ? "s" : ""} used more than once in a single day` : "No repeated same-day usage found", rep ? "Alert" : "Insight"], [ft ? `Showing ${ft} cardholders only` : "Seniors and PWD combined", "Watch"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Sel, {
    v: fe,
    set: setFe,
    all: "All establishments",
    opts: EST0.map(x => x.name)
  }), /*#__PURE__*/React.createElement(Sel, {
    v: ft,
    set: setFt,
    all: "All cardholders",
    opts: ["Senior", "PWD"]
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, rows.length, " transactions match")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Usage by Date", "Usage by Establishment", "Usage Pattern Analysis", "Claims Monitoring"],
    v: t,
    set: setT
  }), t == "Usage by Date" && /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid g3"
  }, /*#__PURE__*/React.createElement(Stat, {
    l: "Avg. daily transactions",
    v: (rows.length / 14).toFixed(1),
    s: "Past 14 days"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Peak day",
    v: pk ? pk.l : "\u2014",
    s: pk ? pk.v + " transactions" : "No data"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Avg. transaction",
    v: rows.length ? peso(rows.reduce((a, x) => a + x.amount, 0) / rows.length) : "\u2014",
    s: "Before discount"
  })), /*#__PURE__*/React.createElement(DayChart, {
    rows: rows
  })), t == "Usage by Establishment" && /*#__PURE__*/React.createElement("div", {
    className: "grid g2e"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Total discounts by establishment"), est.length ? /*#__PURE__*/React.createElement(HBars, {
    data: est
  }) : /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No data for these filters.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Ranking"), /*#__PURE__*/React.createElement(Table, {
    size: 6,
    cols: [{
      l: "#",
      r: x => est.indexOf(x) + 1
    }, {
      l: "Establishment",
      k: "l"
    }, {
      l: "Discounts",
      r: x => peso(x.v)
    }],
    rows: est
  }))), t == "Claims Monitoring" && /*#__PURE__*/React.createElement("div", {
    className: "grid g2e"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Repeated claims (same card, same day)"), reps.length ? /*#__PURE__*/React.createElement(Table, {
    size: 6,
    cols: [{
      l: "Cardholder",
      k: "holder"
    }, {
      l: "Date",
      k: "date"
    }, {
      l: "Claims",
      k: "n"
    }, {
      l: "Establishments",
      k: "est"
    }],
    rows: reps
  }) : /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("b", null, "No repeated claims found"), "No card was used more than once in a single day for these filters.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Unusual transactions (discount of ₱300 or more)"), unus.length ? /*#__PURE__*/React.createElement(Table, {
    size: 6,
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Date",
      r: x => dayLbl(x.day)
    }, {
      l: "Cardholder",
      k: "holder"
    }, {
      l: "Discount",
      r: x => peso(x.disc)
    }, {
      l: "Flag",
      r: () => /*#__PURE__*/React.createElement(B, {
        t: "Review",
        c: "wn"
      })
    }],
    rows: unus
  }) : /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("b", null, "No unusual transactions"), "No discount reached the review threshold for these filters."))), t == "Usage Pattern Analysis" && /*#__PURE__*/React.createElement("div", {
    className: "grid g2e"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Transactions by time of day"), hr.length ? /*#__PURE__*/React.createElement(Bars, {
    data: hr
  }) : /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No data for these filters.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Detected patterns"), pats.map(([m, c]) => /*#__PURE__*/React.createElement("div", {
    key: m,
    className: "li",
    style: {
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement(B, {
    t: c,
    c: c == "Alert" ? "er" : c == "Watch" ? "wn" : "ok"
  }), /*#__PURE__*/React.createElement("span", null, m))), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12,
      marginTop: 10
    }
  }, "Computed from the sample data, not from a trained model."))));
}

/* ---------- WM-6 AI ---------- */
function AI({
  recs,
  setRecs
}) {
  const {
    toast,
    confirm
  } = useContext(Ctx);
  const [t, setT] = useState("Recommendation Generation");
  const [busy, setBusy] = useState(false);
  const [d, setD] = useState(null);
  const [note, setNote] = useState("");
  const [hf, setHf] = useState("");
  const gen = () => {
    setBusy(true);
    setTimeout(() => {
      const n = REC_NEW[recs.length % 2];
      setRecs([{
        id: "REC-" + (101 + recs.length),
        title: n[0],
        detail: n[1],
        conf: n[2],
        cat: n[3],
        prio: n[4],
        basis: "Latest usage analytics (mock)",
        status: "Pending",
        date: "Today"
      }, ...recs]);
      setBusy(false);
      toast("New recommendation generated");
    }, 1200);
  };
  const decide = (r, st) => confirm(`${st == "Approved" ? "Approve" : "Decline"} ${r.id}? It will move from Pending to ${st} and be recorded in the System Logs.`, () => {
    setRecs(recs.map(x => x.id == r.id ? {
      ...x,
      status: st,
      note,
      fresh: true,
      date: "Just now"
    } : x));
    addLog("Recommendation", st + " " + r.id);
    setD(null);
    setNote("");
    toast(`${r.id} ${st.toLowerCase()}. It now appears under Recommendation History.`);
  });
  const cnt = k => recs.filter(r => r.status == k).length;
  const pend = recs.filter(r => r.status == "Pending"),
    fresh = recs.filter(r => r.fresh && r.status != "Pending"),
    hist = recs.filter(r => r.status != "Pending" && (!hf || r.status == hf));
  const rc = r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "card",
    style: {
      marginBottom: 12,
      borderColor: r.fresh && r.status != "Pending" ? "var(--tt)" : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("b", {
    className: "sp"
  }, r.title), /*#__PURE__*/React.createElement(B, {
    t: r.status
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      margin: "2px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd nt"
  }, r.cat), /*#__PURE__*/React.createElement("span", {
    className: "bd " + (r.prio == "High" ? "er" : r.prio == "Medium" ? "wn" : "nt")
  }, r.prio, " priority")), /*#__PURE__*/React.createElement("p", {
    className: "mut",
    style: {
      margin: "6px 0 10px"
    }
  }, r.detail), r.status != "Pending" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("b", null, r.status), " · ", r.date, r.note ? " · Reviewer note: " + r.note : ""), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, "Confidence ", r.conf, "%"), /*#__PURE__*/React.createElement("div", {
    className: "bar",
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: r.conf + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, r.id, " · ", r.date), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: () => {
      setD(r);
      setNote(r.note || "");
    }
  }, r.status == "Pending" ? "Review" : "Details")));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 16,
      borderLeft: "4px solid var(--acc)"
    }
  }, /*#__PURE__*/React.createElement("b", null, "Human review required."), " ", /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, "Recommendations are drafts. An authorized OSCA or PDAO reviewer must approve or decline each one before any action is taken.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g3",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    l: "Pending review",
    v: cnt("Pending"),
    s: "Waiting for a staff decision"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Approved",
    v: cnt("Approved"),
    s: "Accepted into the program plan"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Declined",
    v: cnt("Declined"),
    s: "Not pursued"
  })), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Recommendation Generation", "Recommendation History"],
    v: t,
    set: setT
  }), t.startsWith("Rec") && t == "Recommendation Generation" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("b", null, "Generate recommendations"), /*#__PURE__*/React.createElement("div", {
    className: "mut"
  }, "Drafts sample program suggestions (simulated, no live AI model). Every suggestion needs staff approval.")), /*#__PURE__*/React.createElement("button", {
    className: "btn t",
    disabled: busy,
    onClick: gen
  }, /*#__PURE__*/React.createElement(I, {
    n: "spark",
    s: 16
  }), busy && /*#__PURE__*/React.createElement("i", {
    className: "sp2"
  }), busy ? "Drafting…" : "Generate"))), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontWeight: 600,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      margin: "4px 0 10px"
    }
  }, "Pending review (", pend.length, ")"), pend.map(rc), !pend.length && /*#__PURE__*/React.createElement("div", {
    className: "card mut",
    style: {
      marginBottom: 12
    }
  }, "All caught up. No recommendations are waiting for a decision."), fresh.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      margin: "22px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mut sp",
    style: {
      fontWeight: 600,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Decided this session (", fresh.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: () => setT("Recommendation History")
  }, "View in History")), fresh.map(rc))), t == "Recommendation History" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Sel, {
    v: hf,
    set: setHf,
    all: "All decisions",
    opts: ["Approved", "Declined"]
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, hist.length, " decided")), hist.map(rc), !hist.length && /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No decisions yet.")), d && /*#__PURE__*/React.createElement(Modal, {
    w: true,
    title: d.id + " · Human-in-the-loop review",
    onClose: () => setD(null)
  }, /*#__PURE__*/React.createElement("h3", null, d.title), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd nt"
  }, d.cat), /*#__PURE__*/React.createElement("span", {
    className: "bd " + (d.prio == "High" ? "er" : d.prio == "Medium" ? "wn" : "nt")
  }, d.prio, " priority")), /*#__PURE__*/React.createElement("p", null, d.detail), /*#__PURE__*/React.createElement("div", {
    className: "grid g2e",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mut"
  }, "Confidence"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 22
    }
  }, d.conf, "%")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mut"
  }, "Data basis"), /*#__PURE__*/React.createElement("b", null, d.basis))), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Reviewer notes"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    value: note,
    disabled: d.status != "Pending",
    onChange: e => setNote(e.target.value),
    placeholder: "Add justification for your decision"
  })), d.status == "Pending" ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn d",
    onClick: () => decide(d, "Declined")
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    className: "btn t",
    onClick: () => decide(d, "Approved")
  }, "Approve")) : /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, "Decision: ", /*#__PURE__*/React.createElement(B, {
    t: d.status
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, d.date))));
}

/* ---------- WM-7 Monitoring & Reports ---------- */
function Mon({
  ests
}) {
  const {
    toast
  } = useContext(Ctx);
  const [t, setT] = useState("Establishment Monitoring");
  const [q, setQ] = useState("");
  const [rc, setRc] = useState(null);
  const [rp, setRp] = useState(null);
  const [rt, setRt] = useState("Discount Summary");
  const [re, setRe] = useState("");
  const [df, setDf] = useState("2026-10-27");
  const [dt, setDt] = useState("2026-11-09");
  const tx = TX0.filter(x => JSON.stringify(x).toLowerCase().includes(q.toLowerCase())).sort((a, b) => b.day - a.day);
  const flag = n => n == "Jollibee – Vito Cruz";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Establishment Monitoring", "Transaction Records", "Digital Receipts", "Report Generation"],
    v: t,
    set: setT
  }), t == "Establishment Monitoring" && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(Table, {
    size: 8,
    rows: ests,
    cols: [{
      l: "Establishment",
      r: e => /*#__PURE__*/React.createElement("b", null, e.name)
    }, {
      l: "Category",
      k: "category"
    }, {
      l: "Transactions",
      r: e => TX0.filter(y => y.est == e.name).length
    }, {
      l: "Total discounts",
      r: e => peso(TX0.filter(y => y.est == e.name).reduce((a, y) => a + y.disc, 0))
    }, {
      l: "Avg. per transaction",
      r: e => {
        const x = TX0.filter(y => y.est == e.name);
        return x.length ? peso(x.reduce((a, y) => a + y.disc, 0) / x.length) : "—";
      }
    }, {
      l: "Status",
      r: e => /*#__PURE__*/React.createElement(B, {
        t: flag(e.name) ? "Flagged" : e.status
      })
    }]
  })), t == "Transaction Records" && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Search, {
    v: q,
    set: setQ,
    ph: "Search transactions"
  })), /*#__PURE__*/React.createElement(Table, {
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Date",
      r: x => dayLbl(x.day)
    }, {
      l: "Establishment",
      k: "est"
    }, {
      l: "Cardholder",
      k: "holder"
    }, {
      l: "Total",
      r: x => peso(x.amount)
    }, {
      l: "Discount",
      r: x => peso(x.disc)
    }, {
      l: "Receipt",
      r: x => /*#__PURE__*/React.createElement("button", {
        className: "btn s",
        onClick: () => setRc(x)
      }, /*#__PURE__*/React.createElement(I, {
        n: "eye",
        s: 14
      }), "View")
    }],
    rows: tx
  })), t == "Digital Receipts" && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Search, {
    v: q,
    set: setQ,
    ph: "Search receipts"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, tx.length, " receipts")), /*#__PURE__*/React.createElement("div", {
    className: "grid g3"
  }, tx.slice(0, 12).map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => setRc(x),
    style: {
      textAlign: "left",
      background: "var(--card)",
      border: "1px solid var(--bd)",
      borderRadius: 6,
      padding: 14,
      cursor: "pointer",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("b", null, x.id), /*#__PURE__*/React.createElement("div", null, x.est), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, dayLbl(x.day), " · ", x.holder), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontWeight: 600
    }
  }, peso(x.amount - x.disc), " paid"))))), t == "Report Generation" && /*#__PURE__*/React.createElement("div", {
    className: "grid g2e"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Report parameters"), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Report type"), /*#__PURE__*/React.createElement("select", {
    value: rt,
    onChange: e => setRt(e.target.value)
  }, ["Discount Summary", "Establishment Activity", "Flagged Transactions"].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Establishment"), /*#__PURE__*/React.createElement("select", {
    value: re,
    onChange: e => setRe(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All establishments"), ests.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.id
  }, o.name)))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fld sp"
  }, /*#__PURE__*/React.createElement("label", null, "From"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: df,
    onChange: e => setDf(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld sp"
  }, /*#__PURE__*/React.createElement("label", null, "To"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: dt,
    onChange: e => setDt(e.target.value)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: () => {
      if (df > dt) {
        toast("The start date must be before the end date");
        return;
      }
      const rows = TX0.filter(x => (!re || x.est == re) && isoD(x.day) >= df && isoD(x.day) <= dt && (rt != "Flagged Transactions" || x.disc >= 300));
      setRp({
        rt,
        re,
        df,
        dt,
        rows
      });
      toast("Report generated");
    }
  }, "Generate report")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h3", null, "Report preview"), rp ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, rp.rt), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      marginBottom: 10
    }
  }, rp.re || "All establishments", " · ", rp.df, " to ", rp.dt, rp.rt == "Flagged Transactions" ? " · Rule: discount of ₱300 or more" : ""), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    l: "Transactions",
    v: rp.rows.length
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Discounts",
    v: peso(rp.rows.reduce((a, x) => a + x.disc, 0))
  })), rp.rows.length ? /*#__PURE__*/React.createElement(Table, {
    size: 5,
    cols: rp.rt == "Establishment Activity" ? [{
      l: "Establishment",
      k: "l"
    }, {
      l: "Transactions",
      k: "n"
    }, {
      l: "Discounts",
      r: x => peso(x.v)
    }] : [{
      l: "ID",
      k: "id"
    }, {
      l: "Date",
      r: x => dayLbl(x.day)
    }, {
      l: "Establishment",
      k: "est"
    }, {
      l: "Discount",
      r: x => peso(x.disc)
    }],
    rows: rp.rt == "Establishment Activity" ? Object.entries(group(rp.rows, x => x.est, x => x.disc)).map(([l, v]) => ({
      id: l,
      l,
      v,
      n: rp.rows.filter(y => y.est == l).length
    })) : rp.rows
  }) : /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "No transactions match these parameters."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => toast("PDF export is simulated in this prototype")
  }, /*#__PURE__*/React.createElement(I, {
    n: "dl",
    s: 16
  }), "PDF"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => toast("CSV export is simulated in this prototype")
  }, /*#__PURE__*/React.createElement(I, {
    n: "dl",
    s: 16
  }), "CSV"))) : /*#__PURE__*/React.createElement("p", {
    className: "mut"
  }, "Choose parameters and generate a report to preview it here."))), rc && /*#__PURE__*/React.createElement(Modal, {
    title: "Digital receipt",
    onClose: () => setRc(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "ui-monospace,Menlo,monospace",
      border: "1px dashed var(--bd)",
      borderRadius: 8,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 700
    }
  }, rc.est), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    },
    className: "mut"
  }, dayLbl(rc.day), " · ", rc.hr, ":00"), /*#__PURE__*/React.createElement("hr", null), [["Receipt", rc.id], ["Cardholder", rc.holder], ["Category", rc.type], ["Subtotal", peso(rc.amount)], ["Discount (20%)", "-" + peso(rc.disc)], ["TOTAL", peso(rc.amount - rc.disc)]].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }, a), /*#__PURE__*/React.createElement("b", null, b))))));
}

/* ---------- WM-8 / 9 / 10 ---------- */
function Ests({
  ests,
  setEsts
}) {
  const {
    confirm,
    toast
  } = useContext(Ctx);
  const [t, setT] = useState("Establishments");
  const [cs, setCs] = useState(CSH0);
  const PAST = {
    Approve: "Approved",
    Reject: "Rejected",
    Activate: "Activated",
    Deactivate: "Deactivated"
  };
  const tog = (all, set, r, noun, ns) => {
    ns = ns || (r.status == "Active" ? "Inactive" : "Active");
    const pd = r.status == "Pending",
      vb = ns == "Active" ? pd ? "Approve" : "Activate" : pd ? "Reject" : "Deactivate";
    const casc = noun == "Establishment" && ns == "Inactive" && cs.some(c => c.establishment == r.name && c.status == "Active");
    confirm(`${vb} ${r.name}?${casc ? " Its active cashier accounts will also be deactivated." : ""}`, () => {
      set(all.map(x => x.id == r.id ? {
        ...x,
        status: ns
      } : x));
      if (casc) setCs(cs.map(c => c.establishment == r.name ? {
        ...c,
        status: "Inactive"
      } : c));
      addLog("Account", `${PAST[vb]} ${noun.toLowerCase()} ${r.name}`);
      toast(`${r.name}: ${PAST[vb].toLowerCase()}`);
    });
  };
  const btn = (all, set, noun) => r => r.status == "Pending" ? /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn s t",
    onClick: () => tog(all, set, r, noun, "Active")
  }, "Approve"), /*#__PURE__*/React.createElement("button", {
    className: "btn s d",
    onClick: () => tog(all, set, r, noun, "Inactive")
  }, "Reject")) : /*#__PURE__*/React.createElement("button", {
    className: "btn s " + (r.status == "Active" ? "d" : "t"),
    onClick: () => tog(all, set, r, noun)
  }, r.status == "Active" ? "Deactivate" : "Activate");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Establishments", "Cashier Accounts"],
    v: t,
    set: setT
  }), t == "Establishments" ? /*#__PURE__*/React.createElement(Crud, {
    key: "e",
    logCat: "Account",
    all: ests,
    setAll: setEsts,
    noun: "Establishment",
    prefix: "EST-",
    extra: btn(ests, setEsts, "Establishment"),
    fields: [{
      k: "name",
      l: "Establishment name"
    }, {
      k: "category",
      l: "Category",
      o: ["Pharmacy", "Restaurant", "Grocery", "Transport", "Other"]
    }, {
      k: "owner",
      l: "Owner / company"
    }, {
      k: "address",
      l: "Address"
    }, {
      k: "status",
      l: "Status",
      o: ["Active", "Pending", "Inactive"]
    }],
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Name",
      k: "name"
    }, {
      l: "Category",
      k: "category"
    }, {
      l: "Owner",
      k: "owner"
    }, {
      l: "Status",
      r: r => /*#__PURE__*/React.createElement(B, {
        t: r.status
      })
    }]
  }) : /*#__PURE__*/React.createElement(Crud, {
    key: "c",
    logCat: "Account",
    all: cs,
    setAll: setCs,
    noun: "Cashier",
    prefix: "CSH-",
    extra: btn(cs, setCs, "Cashier"),
    fields: [{
      k: "name",
      l: "Cashier name"
    }, {
      k: "establishment",
      l: "Establishment",
      o: ests.map(e => e.name)
    }, {
      k: "status",
      l: "Status",
      o: ["Active", "Inactive"]
    }],
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Name",
      k: "name"
    }, {
      l: "Establishment",
      k: "establishment"
    }, {
      l: "Status",
      r: r => /*#__PURE__*/React.createElement(B, {
        t: r.status
      })
    }]
  }));
}
function Accounts() {
  const {
    confirm,
    toast
  } = useContext(Ctx);
  const [a, setA] = useState(ACC0);
  const perm = [{
    id: 1,
    role: "OSCA Admin",
    s: "Manage",
    p: "View only",
    a: "Manage OSCA accounts"
  }, {
    id: 2,
    role: "OSCA Staff",
    s: "Manage",
    p: "View only",
    a: "No access"
  }, {
    id: 3,
    role: "PDAO Admin",
    s: "View only",
    p: "Manage",
    a: "Manage PDAO accounts"
  }, {
    id: 4,
    role: "PDAO Staff",
    s: "View only",
    p: "Manage",
    a: "No access"
  }];
  const extra = r => /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: () => {
      toast("Password reset link sent to " + r.email + " (simulated)");
      addLog("Account", "Reset password for " + r.name);
    }
  }, "Reset password"), /*#__PURE__*/React.createElement("button", {
    className: "btn s " + (r.status == "Active" ? "d" : "t"),
    onClick: () => confirm(`${r.status == "Active" ? "Deactivate" : "Activate"} ${r.name}?`, () => {
      setA(a.map(x => x.id == r.id ? {
        ...x,
        status: r.status == "Active" ? "Inactive" : "Active"
      } : x));
      addLog("Account", `${r.status == "Active" ? "Deactivated" : "Activated"} staff account ${r.name}`);
      toast("Account " + (r.status == "Active" ? "deactivated" : "activated"));
    })
  }, r.status == "Active" ? "Deactivate" : "Activate"));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Role permissions"), /*#__PURE__*/React.createElement(Table, {
    size: 4,
    cols: [{
      l: "Role",
      k: "role"
    }, {
      l: "Senior Citizen records",
      k: "s"
    }, {
      l: "PWD records",
      k: "p"
    }, {
      l: "Account management",
      k: "a"
    }],
    rows: perm
  }), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12,
      marginTop: 8
    }
  }, "Prototype note: access limits are demonstrated on Cardholder Records (sign in as OSCA or PDAO). This is not production security.")), /*#__PURE__*/React.createElement(Crud, {
    logCat: "Account",
    all: a,
    setAll: setA,
    noun: "Staff Account",
    prefix: "USR-",
    extra: extra,
    fields: [{
      k: "name",
      l: "Full name"
    }, {
      k: "email",
      l: "Email"
    }, {
      k: "role",
      l: "Role",
      o: ["OSCA Admin", "OSCA Staff", "PDAO Admin", "PDAO Staff"]
    }, {
      k: "status",
      l: "Status",
      o: ["Active", "Inactive"]
    }],
    cols: [{
      l: "ID",
      k: "id"
    }, {
      l: "Name",
      k: "name"
    }, {
      l: "Email",
      k: "email"
    }, {
      l: "Role",
      k: "role"
    }, {
      l: "Status",
      r: r => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-block",
          width: 8,
          height: 8,
          borderRadius: 8,
          marginRight: 6,
          background: r.status == "Active" ? "var(--teal)" : "var(--mut)"
        }
      }), r.status)
    }]
  }));
}
function Logs() {
  const [q, setQ] = useState("");
  const [c, setC] = useState("");
  const rows = LOG0.filter(x => (!c || x.cat == c) && JSON.stringify(x).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Search, {
    v: q,
    set: setQ,
    ph: "Search logs"
  }), /*#__PURE__*/React.createElement(Sel, {
    v: c,
    set: setC,
    all: "All activity",
    opts: ["Login", "Logout", "Record Edit", "Account", "Recommendation"]
  })), /*#__PURE__*/React.createElement(Table, {
    cols: [{
      l: "Time",
      k: "time"
    }, {
      l: "User",
      k: "user"
    }, {
      l: "Type",
      r: x => /*#__PURE__*/React.createElement(B, {
        t: x.cat,
        c: x.cat == "Recommendation" ? "ok" : x.cat == "Record Edit" ? "wn" : "nt"
      })
    }, {
      l: "Action",
      k: "action"
    }],
    rows: rows
  }));
}
const PERSON = {
  OSCA: ["Elena Marquez", "OSCA Admin", "EM", "Elena M."],
  PDAO: ["Carla Mendoza", "PDAO Admin", "CM", "Carla M."]
};
const MODS = [{
  n: "Overview",
  i: "dash",
  keys: ["dash", "notif"]
}, {
  n: "Records and Analysis",
  i: "users",
  keys: ["rec", "ana", "ai"]
}, {
  n: "Establishments",
  i: "store",
  keys: ["mon", "est"]
}, {
  n: "Administration",
  i: "key",
  keys: ["acc", "log"]
}];
const Mark = ({
  s = 30
}) => /*#__PURE__*/React.createElement("img", {
  src: "assets/logo.png",
  width: s,
  height: s,
  alt: "",
  style: {
    display: "block",
    flexShrink: 0
  }
});
const DESC = {
  dash: "Overview of discount activity across participating establishments",
  notif: "Alerts that need your attention",
  rec: "Manage Senior Citizen and PWD cardholder records",
  ana: "See when, where and how discount cards are used",
  ai: "Review suggested programs before they are approved",
  mon: "Monitor establishments, transactions, receipts and reports",
  est: "Manage establishment and cashier accounts",
  acc: "Manage OSCA and PDAO staff access",
  log: "A record of sign-ins, edits and decisions"
};
/* ---------- Design board (Figma-style canvas) ---------- */
const FRAMES = [["WM-1", "Login", "login"], ["WM-2", "Dashboard", "dash"], ["WM-3", "Notifications", "notif"], ["WM-4", "Cardholder Records", "rec"], ["WM-5", "Card Usage Analytics", "ana"], ["WM-6", "AI Recommendations", "ai"], ["WM-7", "Establishment Monitoring and Reports", "mon"], ["WM-8", "Establishment Account Management", "est"], ["WM-9", "Account Management", "acc"], ["WM-10", "System Logs", "log"]];
const noop = () => {};
const SideStatic = ({
  pg
}) => /*#__PURE__*/React.createElement("aside", {
  className: "side"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand"
}, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "ALALAY"), /*#__PURE__*/React.createElement("div", {
  className: "tag"
}, "Discount Management System"))), MODS.map(g => {
  const o = g.keys.includes(pg);
  return /*#__PURE__*/React.createElement("div", {
    key: g.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav mod-h" + (o ? " has" : "")
  }, /*#__PURE__*/React.createElement(I, {
    n: g.i
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, g.n), /*#__PURE__*/React.createElement(I, {
    n: "down",
    s: 16
  })), o && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, g.keys.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "nav s2 " + (pg == k ? "on" : "")
  }, PAGES.find(x => x[0] == k)[1]))));
}));
function FrameBody({
  k
}) {
  if (k == "login") return /*#__PURE__*/React.createElement(Login, {
    onIn: noop,
    onBoard: noop
  });
  const page = {
    dash: /*#__PURE__*/React.createElement(Dash, null),
    notif: /*#__PURE__*/React.createElement(Notif, {
      n: NOT0,
      setN: noop
    }),
    rec: /*#__PURE__*/React.createElement(Records, {
      all: CH0,
      setAll: noop
    }),
    ana: /*#__PURE__*/React.createElement(Analytics, null),
    ai: /*#__PURE__*/React.createElement(AI, {
      recs: REC0,
      setRecs: noop
    }),
    mon: /*#__PURE__*/React.createElement(Mon, {
      ests: EST0
    }),
    est: /*#__PURE__*/React.createElement(Ests, {
      ests: EST0,
      setEsts: noop
    }),
    acc: /*#__PURE__*/React.createElement(Accounts, null),
    log: /*#__PURE__*/React.createElement(Logs, null)
  }[k];
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(SideStatic, {
    pg: k
  }), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", null, PAGES.find(x => x[0] == k)[1]), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 13
    }
  }, MODS.find(g => g.keys.includes(k)).n, " · ", DESC[k])), /*#__PURE__*/React.createElement("div", {
    className: "sbox"
  }, /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    readOnly: true,
    placeholder: "Search pages… (Enter)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ib"
  }, /*#__PURE__*/React.createElement(I, {
    n: "bell"
  })), /*#__PURE__*/React.createElement("span", {
    className: "logo",
    style: {
      width: 30,
      height: 30,
      fontSize: 12,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      borderRadius: 6
    }
  }, "EM")), /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, page)));
}
function Board({
  onExit,
  onOpen
}) {
  const W = 1440,
    H = 900,
    G = 160,
    C = 5,
    TW = C * W + (C - 1) * G,
    TH = 2 * (H + 60) + G;
  const init = () => {
    const z = Math.max(.08, Math.min((innerWidth - 60) / TW, (innerHeight - 170) / TH));
    return {
      z,
      x: (innerWidth - TW * z) / 2,
      y: 96
    };
  };
  const [v, setV] = useState(init);
  const ref = React.useRef(),
    drag = React.useRef(null);
  const zoom = (f, cx, cy) => setV(q => {
    const nz = Math.min(1.5, Math.max(.06, q.z * f));
    return {
      z: nz,
      x: cx - (cx - q.x) * nz / q.z,
      y: cy - (cy - q.y) * nz / q.z
    };
  });
  React.useEffect(() => {
    const el = ref.current;
    const h = e => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) zoom(Math.exp(-e.deltaY * .01), e.clientX, e.clientY);else setV(q => ({
        ...q,
        x: q.x - e.deltaX,
        y: q.y - e.deltaY
      }));
    };
    el.addEventListener("wheel", h, {
      passive: false
    });
    return () => el.removeEventListener("wheel", h);
  }, []);
  const mv = e => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x,
      dy = e.clientY - drag.current.y;
    drag.current = {
      x: e.clientX,
      y: e.clientY
    };
    setV(q => ({
      ...q,
      x: q.x + dx,
      y: q.y + dy
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "board",
    ref: ref,
    onPointerDown: e => {
      drag.current = {
        x: e.clientX,
        y: e.clientY
      };
    },
    onPointerMove: mv,
    onPointerUp: () => drag.current = null,
    onPointerLeave: () => drag.current = null
  }, /*#__PURE__*/React.createElement("div", {
    className: "bcanvas",
    style: {
      transform: `translate(${v.x}px,${v.y}px) scale(${v.z})`,
      "--z": v.z
    }
  }, FRAMES.map(([id, name, k], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "bf",
    style: {
      left: i % C * (W + G),
      top: Math.floor(i / C) * (H + 60 + G) + 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bl",
    style: {
      fontSize: 14 / v.z,
      width: W
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn",
    title: id
  }, i + 1, " ", name), /*#__PURE__*/React.createElement("button", {
    className: "bi",
    "aria-label": "Open " + name + " in the prototype",
    title: "Open in prototype",
    onPointerDown: e => e.stopPropagation(),
    onClick: () => onOpen(k)
  }, /*#__PURE__*/React.createElement(I, {
    n: "expand",
    s: 16 / v.z
  }))), /*#__PURE__*/React.createElement("div", {
    className: "frame",
    style: {
      width: W,
      height: H
    },
    onDoubleClick: () => onOpen(k),
    title: "Double-click to open"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fi"
  }, /*#__PURE__*/React.createElement(FrameBody, {
    k: k
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "btop",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(Mark, {
    s: 26
  }), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("b", null, "ALALAY · Design board"), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, "10 frames, 1440 × 900 · Drag or scroll to pan · Ctrl/⌘ + scroll to zoom · Double-click a frame to open it")), /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: onExit
  }, "Back to prototype")), /*#__PURE__*/React.createElement("div", {
    className: "bzoom",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    "aria-label": "Zoom out",
    onClick: () => zoom(.8, innerWidth / 2, innerHeight / 2)
  }, "−"), /*#__PURE__*/React.createElement("span", null, Math.round(v.z * 100), "%"), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    "aria-label": "Zoom in",
    onClick: () => zoom(1.25, innerWidth / 2, innerHeight / 2)
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "btn s",
    onClick: () => setV(init())
  }, "Fit all")));
}
/* ---------- App shell ---------- */
function App() {
  const [auth, setAuth] = useState(false);
  const [pg, setPg] = useState("dash");
  const [ch, setCh] = useState(CH0);
  const [ests, setEsts] = useState(EST0);
  const [n, setN] = useState(NOT0);
  const [recs, setRecs] = useState(REC0);
  const [tst, setTst] = useState("");
  const [cf, setCf] = useState(null);
  const [mn, setMn] = useState(false);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState("Overview");
  const [role, setRole] = useState("OSCA");
  const [nv, setNv] = useState(false);
  const [nd, setNd] = useState(false);
  const [view, setView] = useState(() => {
    try {
      return "app";
    } catch (e) {
      return "app";
    }
  });
  const goView = x => {
    setView(x);
    try {
      location.hash = x == "board" ? "board" : "";
    } catch (e) {}
  };
  const [th, setTh] = useState(() => {
    try {
      return localStorage.getItem("alalay-theme") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.theme = th;
    try {
      localStorage.setItem("alalay-theme", th);
    } catch (e) {}
  }, [th]);
  const toast = m => {
    setTst(m);
    setTimeout(() => setTst(""), 2600);
  };
  const confirm = (msg, ok) => setCf({
    msg,
    ok
  });
  const go = p => {
    setPg(p);
    setMn(false);
    setNv(false);
    setOpen(MODS.find(g => g.keys.includes(p)).n);
  };
  const logout = () => {
    addLog("Logout", "Signed out");
    setAuth(false);
    setMn(false);
    setPg("dash");
  };
  if (view == "board") return /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: {
      toast: noop,
      confirm: noop
    }
  }, /*#__PURE__*/React.createElement(Board, {
    onExit: () => goView("app"),
    onOpen: k => {
      if (k == "login") setAuth(false);else {
        setAuth(true);
        go(k);
      }
      goView("app");
    }
  }));
  if (!auth) return /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: {
      toast,
      confirm
    }
  }, /*#__PURE__*/React.createElement(Login, {
    onIn: r => {
      setRole(r);
      window.__me = PERSON[r][0];
      addLog("Login", "Signed in as " + PERSON[r][1]);
      setAuth(true);
    }
  }));
  const title = PAGES.find(p => p[0] == pg)[1];
  const search = e => {
    if (e.key == "Enter") {
      const m = PAGES.find(p => p[1].toLowerCase().includes(q.toLowerCase()));
      m && q ? go(m[0]) : toast("No page matches “" + q + "”");
      setQ("");
    }
  };
  const unread = n.filter(x => !x.r).length;
  return /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: {
      toast,
      confirm
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, nv && /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: () => setNv(false)
  }), /*#__PURE__*/React.createElement("aside", {
    className: "side" + (nv ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "ALALAY"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, "Discount Management System"))), MODS.map(g => {
    const o = open == g.n,
      has = g.keys.includes(pg);
    return /*#__PURE__*/React.createElement("div", {
      key: g.n
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav mod-h" + (has ? " has" : ""),
      "aria-expanded": o,
      onClick: () => setOpen(o ? "" : g.n)
    }, /*#__PURE__*/React.createElement(I, {
      n: g.i
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, g.n), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        transition: "transform .15s",
        transform: o ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement(I, {
      n: "down",
      s: 16
    }))), /*#__PURE__*/React.createElement("div", {
      className: "subw" + (o ? " open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "sub"
    }, g.keys.map(k => {
      const l = PAGES.find(p => p[0] == k)[1];
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        className: "nav s2 " + (pg == k ? "on" : ""),
        "aria-current": pg == k ? "page" : undefined,
        onClick: () => go(k)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, l), k == "notif" && unread > 0 && /*#__PURE__*/React.createElement("span", {
        className: "dot",
        style: {
          position: "static"
        }
      }, unread));
    }))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "sfoot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo",
    style: {
      width: 32,
      height: 32,
      fontSize: 12,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      borderRadius: 4,
      flexShrink: 0
    }
  }, PERSON[role][2]), /*#__PURE__*/React.createElement("div", {
    className: "sp"
  }, /*#__PURE__*/React.createElement("b", null, PERSON[role][0]), /*#__PURE__*/React.createElement("span", {
    className: "r"
  }, PERSON[role][1])), /*#__PURE__*/React.createElement("button", {
    className: "sout",
    "aria-label": "Log out",
    title: "Log out",
    onClick: () => confirm("Log out of ALALAY?", logout)
  }, /*#__PURE__*/React.createElement(I, {
    n: "out",
    s: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("a", {
    className: "skip",
    href: "#main"
  }, "Skip to content"), /*#__PURE__*/React.createElement("header", {
    className: "top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ib hb",
    "aria-label": "Open menu",
    onClick: () => setNv(!nv)
  }, /*#__PURE__*/React.createElement(I, {
    n: "menu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    },
    title: DESC[pg]
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, MODS.find(g => g.keys.includes(pg)).n, /*#__PURE__*/React.createElement("span", null, "/"), title), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "sbox"
  }, /*#__PURE__*/React.createElement(I, {
    n: "search",
    s: 16
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: search,
    placeholder: "Search pages… (Enter)",
    "aria-label": "Search pages"
  })), /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "group",
    "aria-label": "Color theme"
  }, [["light", "sun", "Light"], ["dark", "moon", "Dark"]].map(([k, ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-pressed": th == k,
    className: th == k ? "on" : "",
    onClick: () => setTh(k)
  }, /*#__PURE__*/React.createElement(I, {
    n: ic,
    s: 15
  }), l))), (nd || mn) && /*#__PURE__*/React.createElement("div", {
    className: "cl",
    onClick: () => {
      setNd(false);
      setMn(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ib",
    "aria-haspopup": "true",
    "aria-expanded": nd,
    onClick: () => {
      setNd(!nd);
      setMn(false);
    },
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(I, {
    n: "bell"
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, unread)), nd && /*#__PURE__*/React.createElement("div", {
    className: "menu nd",
    role: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      padding: "8px 10px"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "sp"
  }, "Notifications"), /*#__PURE__*/React.createElement("span", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, unread, " unread")), n.slice(0, 4).map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    className: x.r ? "" : "un",
    onClick: () => {
      setN(n.map(y => y.id == x.id ? {
        ...y,
        r: 1
      } : y));
      setNd(false);
      go(NL[x.t][0]);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: x.r ? 400 : 600,
      whiteSpace: "normal"
    }
  }, x.m), /*#__PURE__*/React.createElement("span", {
    className: "mut",
    style: {
      fontSize: 11
    }
  }, x.w)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setNd(false);
      go("notif");
    },
    style: {
      justifyContent: "center",
      fontWeight: 600,
      color: "var(--acc)"
    }
  }, "View all notifications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "ib",
    style: {
      padding: "6px 10px",
      gap: 8,
      display: "flex"
    },
    onClick: () => {
      setMn(!mn);
      setNd(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo",
    style: {
      width: 26,
      height: 26,
      fontSize: 12,
      color: "#fff",
      fontWeight: 700
    }
  }, PERSON[role][2]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      fontSize: 13
    }
  }, PERSON[role][0]), /*#__PURE__*/React.createElement("span", {
    className: "mut",
    style: {
      fontSize: 11
    }
  }, PERSON[role][1])), /*#__PURE__*/React.createElement(I, {
    n: "down",
    s: 14
  })), mn && /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 10px"
    }
  }, /*#__PURE__*/React.createElement("b", null, PERSON[role][0]), /*#__PURE__*/React.createElement("div", {
    className: "mut",
    style: {
      fontSize: 12
    }
  }, PERSON[role][1])), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("acc")
  }, /*#__PURE__*/React.createElement(I, {
    n: "user",
    s: 16
  }), "Account settings"), /*#__PURE__*/React.createElement("button", {
    onClick: () => confirm("Log out of ALALAY?", logout),
    style: {
      color: "var(--red)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "out",
    s: 16
  }), "Logout")))), /*#__PURE__*/React.createElement("div", {
    className: "page pg",
    key: pg,
    id: "main"
  }, {
    dash: /*#__PURE__*/React.createElement(Dash, null),
    notif: /*#__PURE__*/React.createElement(Notif, {
      n: n,
      setN: setN,
      go: go
    }),
    rec: /*#__PURE__*/React.createElement(Records, {
      all: ch,
      setAll: setCh,
      role: role
    }),
    ana: /*#__PURE__*/React.createElement(Analytics, null),
    ai: /*#__PURE__*/React.createElement(AI, {
      recs: recs,
      setRecs: setRecs
    }),
    mon: /*#__PURE__*/React.createElement(Mon, {
      ests: ests
    }),
    est: /*#__PURE__*/React.createElement(Ests, {
      ests: ests,
      setEsts: setEsts
    }),
    acc: /*#__PURE__*/React.createElement(Accounts, null),
    log: /*#__PURE__*/React.createElement(Logs, null)
  }[pg])), cf && /*#__PURE__*/React.createElement(Modal, {
    title: "Please confirm",
    onClose: () => setCf(null)
  }, /*#__PURE__*/React.createElement("p", null, cf.msg), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => setCf(null)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn p",
    onClick: () => {
      cf.ok();
      setCf(null);
    }
  }, "Confirm"))), tst && /*#__PURE__*/React.createElement("div", {
    className: "toast",
    role: "status"
  }, tst)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
