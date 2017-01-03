/**
 * Created by yangbo on 17/1/3.
 */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import MultipleMonitors from 'redux-devtools-multiple-monitors'
import Dispatch from 'redux-devtools-dispatch'
import Inspector from 'redux-devtools-inspector'

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
                 changePositionKey="ctrl-w"
                 changeMonitorKey="ctrl-m">
        <MultipleMonitors>
            <Inspector />
            <Dispatch />
        </MultipleMonitors>
        <MultipleMonitors>
            <LogMonitor />
            <Dispatch />
        </MultipleMonitors>
    </DockMonitor>
)