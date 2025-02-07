const  { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

 const createRole = async (req, res) => {
  const { name } = req.body

  // Validate request data
  if (!name) {
    return res.status(400).json({ error: "Role name is required." })
  }

  try {
    // Create the role in the database
    const role = await prisma.role.create({
      data: { name },
    })
    return res.status(201).json({ message: "Role created successfully.", role })
  } catch (error) {
    console.error("Error creating role:", error)
    // Handle unique constraint error
    if (error.code === "P2002") {
      return res.status(400).json({ error: "Role name must be unique." })
    }
    return res.status(500).json({ error: "An error occurred while creating the role." })
  }
}

module.exports = { createRole }