import mongoose from "mongoose";

const panelSchema = mongoose.Schema(
  {
    panelNo: {
      type: String,
      required: true,
    },
    studentgrps: {
      type: String,
      required: true,
    },
    panelmembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Panel",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Panel = mongoose.model("Panel", panelSchema);

export default Panel;
