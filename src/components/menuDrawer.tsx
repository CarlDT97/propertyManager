import React, { useState } from 'react' // Importing React properly
import Box from '@mui/joy/Box'
import Drawer from '@mui/joy/Drawer'
import Button from '@mui/joy/Button'
import List from '@mui/joy/List'
import Divider from '@mui/joy/Divider'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'

export default function MenuDrawer() {
  const [open, setOpen] = useState(false) // Using useState properly

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(inOpen)
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
