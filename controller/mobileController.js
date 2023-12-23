import Mobile from "../models/Mobile.js";

export const getAllMobile = async (req, res) => {
  try {
    const mobile = await Mobile.find();
    return res.json(mobile);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export const getMobileDetail = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the mobile by ID
    const mobileDetail = await Mobile.findById(id);

    if (!mobileDetail) {
      return res.status(404).json({ error: "Mobile not found" });
    }

    res.json(mobileDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addMobile = async (req, res) => {
  try {
    const { name, price, type, processor, memory, os, images } = req.body;

    const newMobile = await Mobile.create({
      user: req.user.id,
      name,
      price,
      type,
      processor,
      memory,
      os,
      images,
    });

    res.status(201).json(newMobile);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export const updateMobile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, type, processor, memory, os, images } = req.body;

    const updatedMobile = await Mobile.findByIdAndUpdate(
      id,
      {
        user: req.user.id,
        name,
        price,
        type,
        processor,
        memory,
        os,
        images,
      },
      { new: true }
    );

    if (!updatedMobile) {
      return res.status(404).json({ error: "Mobile not found" });
    }

    res.json(updatedMobile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteMobile = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMobile = await Mobile.findByIdAndDelete(id);

    if (!deletedMobile) {
      return res.status(404).json({ error: "Mobile not found" });
    }

    res.json({ message: "Mobile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createMobileReview = async (req, res) => {
  try {
    const { message, mobileId } = req.body;

    const newReview = {
      user: req.user.id,
      name: req.user.name,
      comment: message,
    };
    const mobile = await Mobile.findById(mobileId);
    if (!mobile) {
      return res.status(404).json({ message: "Mobile not found" });
    }

    mobile.reviews.push(newReview);
    const updatedmobile = await mobile.save();
    return res.json({ message: "Review added successfully", updatedmobile });
  } catch (error) {
    return res.json({ message: "Internal Server Error", error: error.message });
  }
};
