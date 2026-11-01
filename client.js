window.__ModuleLoader__.load({
  id: '@local/dsh-side-chat',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PLUGIN_ID = '@local/dsh-side-chat';
    const NS = 'sideChat';
    const KIND = 'sidechat';
    const RESOURCE_PREFIX = 'dsh-resource://sidechat/session/';
    const PARENT_KEY_PREFIX = 'dsh.side-chat.v1.parent.';
    const CHILD_KEY_PREFIX = 'dsh.side-chat.v1.child.';
    const COUNT_KEY_PREFIX = 'dsh.side-chat.v1.count.';
    const NUMBER_KEY_PREFIX = 'dsh.side-chat.v1.number.';

    const CSS = `
      .dshSideChat_action {
        width: 28px;
        height: 28px;
        color: var(--dsw-alias-label-secondary);
        border-radius: var(--dsw-radius-sm);
        cursor: pointer;
        background: 0 0;
        border: none;
        flex: none;
        justify-content: center;
        align-items: center;
        padding: 6px;
        line-height: 1;
        display: inline-flex;
      }
      .dshSideChat_action svg { width: 15px; height: 15px; }
      .dshSideChat_action:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dshSideChat_action:disabled { opacity: .5; cursor: default; }
      .dshSideChat_action:focus-visible,
      .dshSideChat_guideEntry:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 1px;
      }
      .dshSideChat_guideEntry {
        box-sizing: border-box;
        width: 380px;
        max-width: 100%;
        min-height: 56px;
        color: var(--dsw-alias-label-primary);
        font: inherit;
        text-align: left;
        background: var(--dsw-alias-bg-layer-1);
        border: .5px solid var(--dsw-alias-border-l3);
        border-radius: var(--dsw-radius-xl);
        cursor: pointer;
        align-items: center;
        gap: 14px;
        padding: 14px 20px;
        display: flex;
      }
      .dshSideChat_guideEntry:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dshSideChat_guideEntry:disabled { opacity: .6; cursor: default; }
      .dshSideChat_guideIcon {
        width: 26px;
        height: 26px;
        color: var(--dsw-alias-label-secondary);
        flex: none;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .dshSideChat_guideText {
        flex-direction: column;
        flex: 1;
        gap: 3px;
        min-width: 0;
        display: flex;
      }
      .dshSideChat_guideTitle {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 1.4;
        overflow: hidden;
      }
      .dshSideChat_guideDescription {
        color: var(--dsw-alias-label-tertiary);
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 11px;
        line-height: 1.4;
        overflow: hidden;
      }
      .dshSideChat_guideDescription[data-error] { color: var(--dsw-alias-state-error-primary); }
      .dshSideChat_root {
        width: 100%;
        min-width: 0;
        height: 100%;
        min-height: 0;
        display: flex;
      }
      .dshSideChat_loading,
      .dshSideChat_error {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: var(--dsw-alias-label-tertiary);
        justify-content: center;
        align-items: center;
        padding: 24px;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        display: flex;
      }
      .dshSideChat_error { color: var(--dsw-alias-state-error-primary); }
      .dshSideChat_archived {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: var(--dsw-alias-label-secondary);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 24px;
        text-align: center;
        display: flex;
      }
      .dshSideChat_archivedTitle {
        color: var(--dsw-alias-label-primary);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4;
      }
      .dshSideChat_archivedBody {
        color: var(--dsw-alias-label-tertiary);
        max-width: 280px;
        font-size: 12px;
        line-height: 1.5;
      }
      .dshSideChat_restore {
        color: var(--dsw-alias-label-primary);
        font: inherit;
        font-size: 12px;
        line-height: 1.4;
        background: var(--dsw-alias-bg-layer-2);
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: var(--dsw-radius-sm);
        cursor: pointer;
        padding: 6px 12px;
      }
      .dshSideChat_restore:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dshSideChat_restore:disabled { opacity: .6; cursor: default; }
      .dshSideChat_restore:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 1px;
      }
      .dshSideChat_archivedActions { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
      .dshSideChat_menuItem {
        box-sizing: border-box;
        width: 100%;
        color: var(--dsw-alias-label-primary);
        font: inherit;
        font-size: 12px;
        line-height: 1.4;
        text-align: left;
        background: 0 0;
        border: 0;
        border-radius: var(--dsw-radius-sm);
        cursor: pointer;
        align-items: center;
        gap: 8px;
        padding: 7px 10px;
        display: flex;
      }
      .dshSideChat_menuItem:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dshSideChat_menuItem:disabled { opacity: .6; cursor: default; }
      .dshSideChat_menuItem:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 1px;
      }
      .dshSideChat_menuError {
        color: var(--dsw-alias-state-error-primary);
        padding: 2px 10px 6px;
        font-size: 11px;
        line-height: 1.4;
      }
      .dshSideChat_restoreError {
        color: var(--dsw-alias-state-error-primary);
        max-width: 280px;
        font-size: 11px;
        line-height: 1.4;
      }
      .dshSideChat_titleGlyph { color: var(--dsw-alias-label-tertiary); flex: none; margin-right: 4px; }
      .dshSideChat_titleText { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    `;

    const zh = {
      'tab.title': '侧边聊天',
      'tab.projectFallback': '未命名会话',
      'action.open': '打开侧边聊天',
      'action.failed': '无法打开侧边聊天：{message}',
      'guide.title': '侧边聊天',
      'guide.description': '从当前上下文开始一个并行对话，不打断主线程。',
      'guide.opening': '正在创建侧边聊天…',
      'guide.failed': '打开失败：{message}',
      'chat.loading': '正在加载侧边聊天…',
      'chat.failed': '侧边聊天加载失败：{message}',
      'archived.title': '此侧边聊天已归档',
      'archived.body': '已归档的会话无法继续发送消息。恢复后即可继续这段对话。',
      'archived.restore': '恢复并继续',
      'archived.restoring': '正在恢复…',
      'archived.new': '新建侧边聊天',
      'archived.creating': '正在新建…',
      'archived.failed': '操作失败：{message}',
      'archive.action': '归档侧边聊天',
      'archive.busy': '正在归档…',
      'archive.failed': '归档失败：{message}',
    };

    const en = {
      'tab.title': 'Side chat',
      'tab.projectFallback': 'Untitled session',
      'action.open': 'Open side chat',
      'action.failed': 'Could not open the side chat: {message}',
      'guide.title': 'Side chat',
      'guide.description': 'Start a parallel conversation from this context without interrupting the main thread.',
      'guide.opening': 'Creating side chat…',
      'guide.failed': 'Could not open: {message}',
      'chat.loading': 'Loading side chat…',
      'chat.failed': 'Could not load the side chat: {message}',
      'archived.title': 'This side chat is archived',
      'archived.body': 'Archived conversations cannot send messages. Restore it to continue this thread.',
      'archived.restore': 'Restore and continue',
      'archived.restoring': 'Restoring…',
      'archived.new': 'Start a new side chat',
      'archived.creating': 'Starting…',
      'archived.failed': 'Action failed: {message}',
      'archive.action': 'Archive side chat',
      'archive.busy': 'Archiving…',
      'archive.failed': 'Could not archive: {message}',
    };

    function SideChatGlyph({ size = 16, className }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        'aria-hidden': 'true',
        focusable: 'false',
        className,
      }, [
        h('path', {
          key: 'bubble',
          d: 'M2.4 4.05c0-.91.74-1.65 1.65-1.65h5.6c.91 0 1.65.74 1.65 1.65v4.05c0 .91-.74 1.65-1.65 1.65H6.9L4.15 12v-2.3h-.1c-.91 0-1.65-.74-1.65-1.65V4.05Z',
          stroke: 'currentColor',
          strokeWidth: '1.2',
          strokeLinejoin: 'round',
        }),
        h('path', {
          key: 'echo',
          d: 'M11.7 5.25h.45c.91 0 1.65.74 1.65 1.65v3.1c0 .91-.74 1.65-1.65 1.65h-.2V14l-2.75-2.35H7.7',
          stroke: 'currentColor',
          strokeWidth: '1.2',
          strokeLinejoin: 'round',
        }),
        h('circle', { key: 'd1', cx: '4.85', cy: '6.05', r: '.72', fill: 'currentColor' }),
        h('circle', { key: 'd2', cx: '7.1', cy: '6.05', r: '.72', fill: 'currentColor' }),
      ]);
    }

    function messageOf(error) {
      if (error instanceof Error) return error.message;
      if (typeof error === 'string') return error;
      try {
        return JSON.stringify(error);
      } catch (_unserializable) {
        return String(error);
      }
    }

    function sideChatAddress(parentSessionId, childSessionId) {
      const query = new URLSearchParams({ parent: parentSessionId });
      return `${RESOURCE_PREFIX}${encodeURIComponent(childSessionId)}?${query}`;
    }

    function parseSideChatAddress(value) {
      let url;
      try {
        url = new URL(value);
      } catch (_invalidUrl) {
        return undefined;
      }
      if (url.protocol !== 'dsh-resource:' || url.hostname.toLowerCase() !== 'sidechat') return undefined;
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts.length !== 2 || parts[0] !== 'session') return undefined;
      const parentSessionId = url.searchParams.get('parent');
      if (parentSessionId === null || parentSessionId === '') return undefined;
      let childSessionId;
      try {
        childSessionId = decodeURIComponent(parts[1]);
      } catch (_invalidEncoding) {
        return undefined;
      }
      if (childSessionId === '') return undefined;
      return { parentSessionId, childSessionId };
    }

    function readStorage(key) {
      try {
        return localStorage.getItem(key) ?? undefined;
      } catch (_storageUnavailable) {
        return undefined;
      }
    }

    function writeStorage(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (_storageUnavailable) {
        // The side chat still works for this window; only reopening it later degrades.
      }
    }

    function removeStorage(key) {
      try {
        localStorage.removeItem(key);
      } catch (_storageUnavailable) {
        // Nothing else to do.
      }
    }

    function rememberSideChat(parentSessionId, childSessionId) {
      writeStorage(`${PARENT_KEY_PREFIX}${parentSessionId}`, childSessionId);
      writeStorage(`${CHILD_KEY_PREFIX}${childSessionId}`, parentSessionId);
    }

    function forgetSideChat(parentSessionId, childSessionId) {
      removeStorage(`${PARENT_KEY_PREFIX}${parentSessionId}`);
      removeStorage(`${CHILD_KEY_PREFIX}${childSessionId}`);
    }

    function mappedChild(parentSessionId) {
      return readStorage(`${PARENT_KEY_PREFIX}${parentSessionId}`);
    }

    function isSideChatChild(sessionId) {
      return readStorage(`${CHILD_KEY_PREFIX}${sessionId}`) !== undefined;
    }

    function parsePositiveInt(value) {
      const parsed = Number.parseInt(value ?? '', 10);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
    }

    function formatSideChatTitle(projectName, number) {
      return `[${projectName}]侧边聊天（${number}）`;
    }

    function waitForAbort(signal) {
      if (signal.aborted) return Promise.resolve();
      return new Promise((resolve) => {
        signal.addEventListener('abort', () => resolve(), { once: true });
      });
    }

    function SideChatHeaderAction({ sessionId, useSession, openSideChat, t }) {
      const session = useSession((value) => value);
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState(null);
      if (session?.subagent != null || isSideChatChild(sessionId)) return null;

      const open = () => {
        if (busy) return;
        setBusy(true);
        setError(null);
        Promise.resolve(openSideChat(sessionId))
          .catch((cause) => {
            console.error('[side-chat] open failed', cause);
            setError(messageOf(cause));
          })
          .finally(() => setBusy(false));
      };

      return h('button', {
        type: 'button',
        className: 'dshSideChat_action',
        'aria-label': t('action.open'),
        'aria-busy': busy || undefined,
        'data-side-chat-action': true,
        title: error === null ? t('action.open') : t('action.failed', { message: error }),
        disabled: busy,
        onClick: open,
      }, h(SideChatGlyph, { size: 16 }));
    }

    function SideChatGuideEntry({ sessionId, entryId, title, description, openSideChat, useTabInfo, t }) {
      const { tab } = useTabInfo();
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState(null);

      const open = () => {
        if (busy) return;
        setBusy(true);
        setError(null);
        Promise.resolve(openSideChat(sessionId, { replaceTab: tab.id, preferNewPane: false }))
          .catch((cause) => {
            console.error('[side-chat] guide entry failed', cause);
            setError(messageOf(cause));
          })
          .finally(() => setBusy(false));
      };

      const detail = busy
        ? t('guide.opening')
        : error === null
          ? description
          : t('guide.failed', { message: error });

      return h('button', {
        type: 'button',
        className: 'dshSideChat_guideEntry',
        'data-side-chat-guide-entry': entryId,
        'aria-busy': busy || undefined,
        disabled: busy,
        onClick: open,
      }, [
        h('span', { key: 'icon', className: 'dshSideChat_guideIcon' }, h(SideChatGlyph, { size: 26 })),
        h('span', { key: 'text', className: 'dshSideChat_guideText' }, [
          h('span', { key: 'title', className: 'dshSideChat_guideTitle' }, title),
          detail === undefined || detail === null ? null : h('span', {
            key: 'detail',
            className: 'dshSideChat_guideDescription',
            'data-error': error === null ? undefined : true,
          }, detail),
        ]),
      ]);
    }

    function SideChatTabMenuItem({ tab, dismiss, sessionId, archiveSideChat, t }) {
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState(null);
      if (tab.kind !== KIND) return null;

      const archive = () => {
        if (busy) return;
        setBusy(true);
        setError(null);
        Promise.resolve(archiveSideChat(sessionId, tab.id))
          .then(() => dismiss())
          .catch((cause) => {
            console.error('[side-chat] archive failed', cause);
            setError(messageOf(cause));
          })
          .finally(() => setBusy(false));
      };

      return h('div', { 'data-side-chat-menu': '' }, [
        h('button', {
          key: 'button',
          type: 'button',
          role: 'menuitem',
          className: 'dshSideChat_menuItem',
          'aria-busy': busy || undefined,
          disabled: busy,
          onClick: archive,
        }, busy ? t('archive.busy') : t('archive.action')),
        error === null ? null : h('div', {
          key: 'error',
          className: 'dshSideChat_menuError',
          role: 'alert',
        }, t('archive.failed', { message: error })),
      ]);
    }

    function SideChatTitle({ useTabInfo, useSessions, t }) {
      const { tab } = useTabInfo();
      const address = parseSideChatAddress(tab.contentId);
      const liveTitle = useSessions((state) => address === undefined
        ? undefined
        : state.byId[address.childSessionId]?.title);
      return h(React.Fragment, null, [
        h(SideChatGlyph, { key: 'icon', size: 14, className: 'dshSideChat_titleGlyph' }),
        h('span', { key: 'text', className: 'dshSideChat_titleText' }, liveTitle || tab.title || t('tab.title')),
      ]);
    }

    function FixedChatConversationView(props) {
      return h(React.Fragment, null, props.renderSlot('conversation.session', { view: 'chat' }));
    }

    function SideChatConversationPanel({ sessionId, useSession, useConversation, useSessions, renderFactorySlot }) {
      const session = useSession((value) => value);
      const conversation = useConversation((value) => value);
      const shellPhase = conversation.activeTargets.size > 0
        || (!session.blank && !session.awaitingFirstTurn)
        || session.running
        ? 'active'
        : session.promptAttempted
          ? 'engaging'
          : 'blank';
      const summaryBlank = useSessions((state) => state.byId[sessionId]?.blank);
      const parentAvailabilityPending = session.subagent?.address.mode === 'continuable'
        && session.subagent.parentAvailable === undefined;
      const settling = (shellPhase === 'blank' && session.openState === 'loading' && summaryBlank !== true)
        || parentAvailabilityPending;
      const hero = shellPhase === 'blank' && (session.openState === 'open' || summaryBlank === true);
      return renderFactorySlot('conversation.content', {
        variant: 'embedded',
        phase: settling ? 'settling' : hero ? 'hero' : 'active',
        hero,
      }, { slots: { views: FixedChatConversationView } });
    }

    function SideChatTab({ sessionId, useResource, useTabInfo, useWorkspaces, useSessions, SessionProvider, renderSlot, ensureActive, ensureChildTitle, openSideChat, t }) {
      const { tab } = useTabInfo();
      const address = parseSideChatAddress(tab.contentId);
      const childSessionId = address?.childSessionId;
      const archived = useWorkspaces((state) => childSessionId !== undefined
        && state !== undefined
        && Array.isArray(state.archivedSessionIds)
        && state.archivedSessionIds.includes(childSessionId));
      const parentTitle = useSessions((state) => state.byId[sessionId]?.title);
      const [busy, setBusy] = React.useState(false);
      const [busyLabel, setBusyLabel] = React.useState(null);
      const [actionError, setActionError] = React.useState(null);
      const resource = useResource(tab.contentId);

      React.useEffect(() => {
        if (childSessionId !== undefined) void ensureChildTitle(sessionId, childSessionId);
      }, [childSessionId, ensureChildTitle, parentTitle, sessionId]);

      const run = (label, operation) => {
        if (busy) return;
        setBusy(true);
        setBusyLabel(label);
        setActionError(null);
        Promise.resolve(operation())
          .catch((cause) => {
            console.error('[side-chat] archived action failed', cause);
            setActionError(messageOf(cause));
          })
          .finally(() => {
            setBusy(false);
            setBusyLabel(null);
          });
      };

      const restore = () => {
        if (childSessionId === undefined) return;
        run('archived.restoring', async () => {
          await ensureActive(childSessionId);
          await ensureChildTitle(sessionId, childSessionId);
        });
      };

      const startNew = () => {
        run('archived.creating', () => openSideChat(sessionId, {
          forceNew: true,
          replaceTab: tab.id,
          preferNewPane: false,
        }));
      };

      if (archived) {
        return h('div', {
          className: 'dshSideChat_archived',
          'data-side-chat-archived': '',
        }, [
          h('div', { key: 'title', className: 'dshSideChat_archivedTitle' }, t('archived.title')),
          h('div', { key: 'body', className: 'dshSideChat_archivedBody' }, t('archived.body')),
          h('div', { key: 'actions', className: 'dshSideChat_archivedActions' }, [
            h('button', {
              key: 'restore',
              type: 'button',
              className: 'dshSideChat_restore',
              disabled: busy || childSessionId === undefined,
              onClick: restore,
            }, t('archived.restore')),
            h('button', {
              key: 'new',
              type: 'button',
              className: 'dshSideChat_restore',
              disabled: busy,
              onClick: startNew,
            }, t('archived.new')),
          ]),
          busy ? h('div', {
            key: 'busy',
            className: 'dshSideChat_archivedBody',
            role: 'status',
          }, t(busyLabel)) : null,
          actionError === null ? null : h('div', {
            key: 'error',
            className: 'dshSideChat_restoreError',
            role: 'alert',
          }, t('archived.failed', { message: actionError })),
        ]);
      }

      const error = resource?.error;
      if (error !== undefined && error !== null) {
        return h('div', { className: 'dshSideChat_error', role: 'alert' },
          t('chat.failed', { message: messageOf(error) }));
      }
      const value = resource?.value;
      if (value === undefined) {
        return h('div', { className: 'dshSideChat_loading', role: 'status', 'aria-live': 'polite' },
          t('chat.loading'));
      }
      return h('div', { className: 'dshSideChat_root', 'data-side-chat': '' },
        h(SessionProvider, { session: value.reference },
          renderSlot('sidechat.conversation', {})));
    }

    function apply(ctx) {
      const t = ctx.locale.bind(NS);

      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'side-chat: dictionaries');

      ctx.effect(() => {
        if (typeof document === 'undefined') return;
        const tag = document.createElement('style');
        tag.dataset.plugin = PLUGIN_ID;
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => {
          tag.remove();
        };
      }, 'side-chat: styles');

      const pending = new Map();

      const ensureActive = async (childSessionId) => {
        if (ctx.workspaces === undefined) return;
        await ctx.workspaces.unarchiveSession(childSessionId);
      };

      const sessionExists = (sessionId) => {
        try {
          return ctx.sessions.list.getSnapshot().byId[sessionId] !== undefined;
        } catch (_sessionsUnavailable) {
          return false;
        }
      };

      const findOpenTab = (parentSessionId) => {
        try {
          const tabs = ctx.sidebarRight.tabsIn(parentSessionId);
          for (let index = tabs.length - 1; index >= 0; index -= 1) {
            const tab = tabs[index];
            if (tab.kind !== KIND) continue;
            const address = parseSideChatAddress(tab.contentId);
            if (address?.parentSessionId === parentSessionId) return tab;
          }
        } catch (_sidebarUnavailable) {
          return undefined;
        }
        return undefined;
      };

      const projectFor = (parentSessionId) => {
        let title;
        try {
          title = ctx.sessions.list.getSnapshot().byId[parentSessionId]?.title;
        } catch (_sessionsUnavailable) {
          title = undefined;
        }
        const name = typeof title === 'string' && title.trim() !== ''
          ? title.trim()
          : t('tab.projectFallback');
        return { key: `session:${parentSessionId}`, name };
      };

      const allocateNumber = (projectKey) => {
        const key = `${COUNT_KEY_PREFIX}${encodeURIComponent(projectKey)}`;
        const current = parsePositiveInt(readStorage(key)) ?? 0;
        const next = current + 1;
        writeStorage(key, String(next));
        return next;
      };

      const renameChild = (childSessionId, title) => {
        void ctx.sessions.using(childSessionId, { source: 'sidebarChat' }, async (reference) => {
          try {
            await reference.binding.session.rename(title);
          } catch (_renameFailed) {
            // The inherited title is still usable; the tab has its own title.
          }
        }).catch(() => {});
      };

      const ensureChildTitle = (parentSessionId, childSessionId) => {
        const project = projectFor(parentSessionId);
        let number = parsePositiveInt(readStorage(`${NUMBER_KEY_PREFIX}${childSessionId}`));
        if (number === undefined) {
          number = allocateNumber(project.key);
          writeStorage(`${NUMBER_KEY_PREFIX}${childSessionId}`, String(number));
        }
        const desired = formatSideChatTitle(project.name, number);
        let current;
        try {
          current = ctx.sessions.list.getSnapshot().byId[childSessionId]?.title;
        } catch (_sessionsUnavailable) {
          current = undefined;
        }
        if (current !== desired) renameChild(childSessionId, desired);
        return desired;
      };

      const archiveSideChat = async (parentSessionId, tabId) => {
        const tabs = ctx.sidebarRight.tabsIn(parentSessionId);
        const tab = tabs.find((candidate) => candidate.id === tabId);
        if (tab === undefined) throw new Error('side-chat: the tab is no longer open');
        const address = parseSideChatAddress(tab.contentId);
        if (address === undefined || address.parentSessionId !== parentSessionId) {
          throw new Error('side-chat: the tab is not a side chat');
        }
        await ctx.workspaces.archiveSession(address.childSessionId, { stopActivity: true });
        if (mappedChild(parentSessionId) === address.childSessionId) {
          removeStorage(`${PARENT_KEY_PREFIX}${parentSessionId}`);
        }
        removeStorage(`${CHILD_KEY_PREFIX}${address.childSessionId}`);
        removeStorage(`${NUMBER_KEY_PREFIX}${address.childSessionId}`);
        ctx.sidebarRight.closeIn(parentSessionId, tabId);
      };

      const openSideChat = (parentSessionId, options = {}) => {
        const held = pending.get(parentSessionId);
        if (held !== undefined) return held;

        const task = (async () => {
          const forceNew = options.forceNew === true;
          const existing = forceNew ? undefined : findOpenTab(parentSessionId);
          if (existing !== undefined) {
            const address = parseSideChatAddress(existing.contentId);
            if (address !== undefined) void ensureChildTitle(parentSessionId, address.childSessionId);
            ctx.sidebarRight.openResource(existing.contentId, {
              kind: KIND,
              revealIfOpened: true,
              ...(options.replaceTab === undefined ? {} : { replaceTab: options.replaceTab }),
            });
            return { status: 'reused' };
          }

          const remembered = forceNew ? undefined : mappedChild(parentSessionId);
          let childSessionId;
          if (remembered !== undefined && sessionExists(remembered)) {
            childSessionId = remembered;
            void ensureChildTitle(parentSessionId, childSessionId);
          } else {
            if (remembered !== undefined) forgetSideChat(parentSessionId, remembered);
            const project = projectFor(parentSessionId);
            childSessionId = await ctx.sessions.fork({
              sessionId: parentSessionId,
              increaseTitle: false,
            });
            const number = allocateNumber(project.key);
            writeStorage(`${NUMBER_KEY_PREFIX}${childSessionId}`, String(number));
            rememberSideChat(parentSessionId, childSessionId);
            renameChild(childSessionId, formatSideChatTitle(project.name, number));
          }

          ctx.sidebarRight.openResource(sideChatAddress(parentSessionId, childSessionId), {
            kind: KIND,
            preferNewPane: options.preferNewPane !== false,
            revealIfOpened: true,
            ...(options.replaceTab === undefined ? {} : { replaceTab: options.replaceTab }),
          });
          return { status: forceNew ? 'created' : remembered === childSessionId ? 'reopened' : 'created' };
        })();

        const guarded = task.finally(() => {
          pending.delete(parentSessionId);
        });
        pending.set(parentSessionId, guarded);
        return guarded;
      };

      ctx.inject(['resources', 'sidebarRightTabs', 'slots'], (scope) => {
        scope.effect(() => scope.resources.register({
          protocol: 'sidechat',
          async *open(resourceAddress, { signal }) {
            const address = parseSideChatAddress(resourceAddress);
            if (address === undefined) {
              throw new Error(`side-chat: invalid resource address "${resourceAddress}"`);
            }
            if (signal.aborted) return;
            const reference = scope.sessions.retain(address.childSessionId, {
              source: 'sidebarChat',
              signal,
            });
            try {
              yield { ok: true, value: { address, reference } };
              await waitForAbort(signal);
            } finally {
              reference.release();
            }
          },
        }), 'side-chat: resource provider');

        scope.effect(() => scope.sidebarRightTabs.register({
          id: PLUGIN_ID,
          kind: KIND,
          patterns: [`${RESOURCE_PREFIX}**`],
          priority: 'extension',
          canOpen: (address) => parseSideChatAddress(address) !== undefined,
          title: () => t('tab.title'),
          keepMounted: true,
          guide: [{
            id: 'open',
            title: () => t('guide.title'),
            description: () => t('guide.description'),
            order: 20,
            icon: SideChatGlyph,
          }],
        }), 'side-chat: tab type');

        scope.slots.inject('sidebar.right.pane.tab', () => scope.slots.register({
          name: 'sidebar.right.pane.tab',
          key: PLUGIN_ID,
          locale: NS,
          children: {
            'sidechat.conversation': { kind: 'single', scope: 'session' },
          },
          inject: () => ({ ensureActive, ensureChildTitle, openSideChat }),
        }, SideChatTab));

        scope.slots.inject('sidechat.conversation', () => scope.slots.register({
          name: 'sidechat.conversation',
          locale: NS,
        }, SideChatConversationPanel));

        scope.slots.inject('sidebar.right.pane.tab.title', () => scope.slots.register({
          name: 'sidebar.right.pane.tab.title',
          key: PLUGIN_ID,
          locale: NS,
        }, SideChatTitle));

        scope.slots.inject('sidebar.right.tab.menu.item', () => scope.slots.register({
          name: 'sidebar.right.tab.menu.item',
          id: 'side-chat-archive',
          order: 100,
          locale: NS,
          inject: () => ({ archiveSideChat }),
        }, SideChatTabMenuItem));

        scope.slots.inject('sidebar.right.tab.guide.entry', () => scope.slots.register({
          name: 'sidebar.right.tab.guide.entry',
          key: PLUGIN_ID,
          locale: NS,
          inject: () => ({ openSideChat }),
        }, SideChatGuideEntry));

        scope.slots.inject('conversation.session.header.actions', () => scope.slots.register({
          name: 'conversation.session.header.actions',
          id: 'side-chat',
          order: 15,
          locale: NS,
          inject: () => ({ openSideChat }),
        }, SideChatHeaderAction));
      });
    }

    return {
      inject: ['sessions', 'slots', 'locale', 'sidebarRight', 'workspaces'],
      apply,
    };
  },
});
